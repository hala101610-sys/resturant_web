import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import About from './components/About';
import Footer from './components/Footer'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [language, setLanguage] = useState('tr'); 

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header 
        cartItems={cartItems} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <Hero language={language} />
      <Products addToCart={addToCart} language={language} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} language={language} />
      <About language={language} />
      <Testimonials language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;