import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { ProductDetail } from './pages/ProductDetail';
import About from './pages/About';
import Policies from './pages/Policies';
import Returns from './pages/Returns';
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import React, { Suspense } from 'react';

// Utilisation de React.lazy pour le chargement paresseux

const SuccessOrder = React.lazy(() => import('./pages/SuccessOrder'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              
              <Route path="/success-order/:id" element={<SuccessOrder />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;