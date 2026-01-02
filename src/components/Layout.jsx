import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme-preference') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme-preference', newTheme);

    // Properly toggle dark class for smooth animation
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen mx-auto px-8">
      <Header toggleTheme={toggleTheme} />
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
    </div>
  );
}

export default Layout;

