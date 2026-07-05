import React from 'react';

function Hero({ language }) { 
  const heroStyle = {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8%',
    backgroundColor: '#222',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url("/enjoy_high_japanese_cuisine.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: 'system-ui, sans-serif'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px solid #ff9f1c',
    borderRadius: '25px',
    cursor: 'pointer',
    textDecoration: 'none', 
    transition: '0.3s',
    textAlign: 'center'
  };

  return (
    <section id="hero" style={heroStyle}>
      <div style={{ 
        maxWidth: '600px', 
        textAlign: language === 'ar' ? 'right' : 'left',
        direction: language === 'ar' ? 'rtl' : 'ltr',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          <span style={{ color: '#ff9f1c' }}>Cafe & Restaurant</span>
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '30px', lineHeight: '1.6' }}>
          {language === 'tr' 
            ? 'Menümüzde yemeklerin yanı sıra, sıcak ve soğuk içeceklerimizle sizleri her zaman bekliyoruz.' 
            : language === 'en' 
            ? 'Along with the delicious dishes on our menu, our hot and cold beverages are always waiting for you.' 
            : 'إلى جانب الأطباق اللذيذة في قائمتنا، فإن مشروباتنا الساخنة والباردة في انتظاركم دائماً.'}
        </p>
        
        <a 
          href="#menu" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff9f1c'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {language === 'tr' ? 'Şimdi Sipariş Ver' : language === 'en' ? 'Order Now' : 'اطلب الآن'}
        </a>
      </div>
    </section>
  );
}

export default Hero;