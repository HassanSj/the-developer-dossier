import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import Press from './pages/Press';
import PressDetail from './pages/PressDetail';
import Lifestyle from './pages/Lifestyle';
import Desk from './pages/Desk';
import Terms from './pages/Terms';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:id" element={<CaseDetail />} />
        <Route path="/press" element={<Press />} />
        <Route path="/press/:slug" element={<PressDetail />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/desk" element={<Desk />} />
        <Route path="/desk/casefile-invoices" element={<Desk />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

