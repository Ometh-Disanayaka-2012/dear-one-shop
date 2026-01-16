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
import { Contact } from 'lucide-react';
import ContactSection from './components/ContactSection';
import Cart from './components/Cart'; // Add this

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add this

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId: number) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="app">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      <FeaturedProducts 
        products={featuredProducts} 
        onAddToCart={handleAddToCart}
      />
      <AboutSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
      
      {/* Cart Modal */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;