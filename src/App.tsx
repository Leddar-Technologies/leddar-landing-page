import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtisanPage from './pages/ArtisanPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';
import ResourcesPage from './pages/ResourcesPage';
import ProductsPage from './pages/ProductsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E9]">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisan" element={<ArtisanPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
