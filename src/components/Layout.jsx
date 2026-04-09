import { useState, useLayoutEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import TorchLight from './TorchLight';
import { TorchProvider } from '../context/TorchContext';
import { OnboardingTourProvider } from '../onboarding/OnboardingTourContext';
import OnboardingTour from '../onboarding/OnboardingTour';

function readStoredTheme() {
  try {
    return localStorage.getItem('theme-preference') || 'light';
  } catch {
    return 'light';
  }
}

function Layout({ children }) {
  const [theme, setThemeState] = useState(readStoredTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const setThemePreference = useCallback((next) => {
    setThemeState(next);
    localStorage.setItem('theme-preference', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <OnboardingTourProvider>
      <TorchProvider theme={theme} setTheme={setThemePreference}>
        <div className="min-h-screen mx-auto px-8">
          <Header />
          <div className="h-16 md:h-20 lg:h-20"></div>
          <main
            className="py-6"
            id="main-content"
            role="main"
            itemScope
            itemType="https://schema.org/WebPage"
            aria-label="Home page content"
          >
            {children}
          </main>
          <Footer />
          <OnboardingTour />
        </div>
        <TorchLight />
      </TorchProvider>
    </OnboardingTourProvider>
  );
}

export default Layout;
