import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemoveFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cart, onRemoveFromCart }) => {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart Modal */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="bg-stone-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              Your Cart
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-stone-600 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-stone-300 mb-4" />
              <p className="text-stone-500 text-lg">Your cart is empty</p>
              <p className="text-stone-400 text-sm mt-2">Add some personalized gifts!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="bg-stone-50 rounded-xl p-4 flex gap-4 border border-stone-200"
                >
                  <div className="w-20 h-20 bg-stone-200 rounded-lg flex items-center justify-center text-stone-500 flex-shrink-0">
                    {item.image}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-800 mb-1">{item.name}</h3>
                    <p className="text-stone-600 text-sm mb-2">{item.description}</p>
                    <p className="text-stone-700 font-bold">${item.price.toFixed(2)}</p>
                  </div>

                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="self-start hover:bg-red-100 p-2 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-stone-200 p-6 bg-stone-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-stone-700">Total:</span>
              <span className="text-2xl font-bold text-stone-800" style={{ fontFamily: 'Georgia, serif' }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            
            <button 
              className="w-full bg-stone-700 hover:bg-stone-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
            
            <button 
              onClick={onClose}
              className="w-full mt-3 bg-transparent border border-stone-300 text-stone-700 font-semibold py-3 rounded-xl hover:bg-stone-100 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;