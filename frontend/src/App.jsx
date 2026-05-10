import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course3Month from './pages/Course3Month';
import Course6Month from './pages/Course6Month';
import PlacementsAbroad from './pages/PlacementsAbroad';
import Gallery from './pages/Gallery';
import CareerGuide from './pages/CareerGuide';
import Tastymonials from './pages/Tastymonials';
import Contact from './pages/Contact';

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
