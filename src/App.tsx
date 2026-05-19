import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArtisanPage from "./pages/ArtisanPage";
import AboutPage from "./pages/AboutPage";
import PoliciesPage from "./pages/PoliciesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProductsPage from "./pages/ProductsPage";
import TermsCondition from "./pages/TermsCondition";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const showHeroTools = pathname === "/";

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFF7E9]">
      {showHeroTools && (
        <>
          <img
            src="/Hammer_3D.png"
            alt="Hammer"
            className="absolute right-0 top-24 sm:top-28 w-14 sm:w-16 opacity-90 md:hidden pointer-events-none z-20"
          />
          <img
            src="/Grinder.png"
            alt="Grinder"
            className="absolute left-0 top-72 sm:top-80 w-16 sm:w-20 opacity-90 md:hidden pointer-events-none z-20"
          />
        </>
      )}
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisan" element={<ArtisanPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
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
