import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';

const Home            = lazy(() => import('./pages/Home'));
const Courses         = lazy(() => import('./pages/Courses'));
const Course3Month    = lazy(() => import('./pages/Course3Month'));
const Course6Month    = lazy(() => import('./pages/Course6Month'));
const PlacementsAbroad= lazy(() => import('./pages/PlacementsAbroad'));
const Gallery         = lazy(() => import('./pages/Gallery'));
const CareerGuide     = lazy(() => import('./pages/CareerGuide'));
const Tastymonials    = lazy(() => import('./pages/Tastymonials'));
const Contact         = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <PopupForm />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/3-month" element={<Course3Month />} />
          <Route path="/courses/6-month" element={<Course6Month />} />
          <Route path="/placements" element={<PlacementsAbroad />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/tastymonials" element={<Tastymonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
