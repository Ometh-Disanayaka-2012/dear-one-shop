import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ReviewSection from './components/ReviewSection';
import { products } from './data/products';
import type { Product } from './types';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FeaturedProducts 
        products={featuredProducts} 
        onAddToCart={handleAddToCart}
      />
      <AboutSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;