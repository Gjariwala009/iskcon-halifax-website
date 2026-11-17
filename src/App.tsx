import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { DonatePage } from './pages/DonatePage';
import { HomePage } from './pages/HomePage';
import { NewTemplePage } from './pages/NewTemplePage';
import { VisitUsPage } from './pages/VisitUsPage';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-temple" element={<NewTemplePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit-us" element={<VisitUsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
