import React, { useState, useEffect } from 'react';

function Header({ cartItems = [], language, setLanguage }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'cart', 'about', 'testimonials'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 8%',
    backgroundColor: '#fff',
    color: '#000',
    borderBottom: '1px solid #e0e0e0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: 'system-ui, sans-serif',
    flexDirection: language === 'ar' ? 'row-reverse' : 'row'
  };

  const getLinkStyle = (sectionId) => ({
    color: '#000',
    textDecoration: 'none',
    fontWeight: activeSection === sectionId ? 'bold' : '500',
    fontSize: '1rem',
    paddingBottom: '5px',
    borderBottom: activeSection === sectionId ? '2px solid #000' : '2px solid transparent',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  });

  const badgeStyle = {
    backgroundColor: '#ff9f1c',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 7px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    display: 'inline-block',
    lineHeight: '1'
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>
        Cafe & Restaurant
      </div>
      <nav>
        
        <ul style={{ display: 'flex', listStyle: 'none', gap: '40px', margin: 0, padding: 0, alignItems: 'center', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
          
          <li style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '1.4rem', 
                cursor: 'pointer', 
                padding: 0, 
                display: 'flex', 
                alignItems: 'center',
                filter: 'grayscale(100%) brightness(0)' 
              }}
            >
              🌐
            </button>
             
            {isLangMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '35px',
                right: language === 'ar' ? 'auto' : '0',
                left: language === 'ar' ? '0' : 'auto',
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: '120px',
                zIndex: 2500,
                padding: '5px 0',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <button onClick={() => { setLanguage('tr'); setIsLangMenuOpen(false); }} style={{ padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: '#000000', display: 'flex', justifyContent: 'space-between', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                  <span>Türkçe</span>
                  {language === 'tr' && <span style={{ color: '#ff9f1c', fontWeight: 'bold' }}>✓</span>}
                </button>
                
                <button onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }} style={{ padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: '#000000', display: 'flex', justifyContent: 'space-between', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                  <span>English</span>
                  {language === 'en' && <span style={{ color: '#ff9f1c', fontWeight: 'bold' }}>✓</span>}
                </button>
                
                <button onClick={() => { setLanguage('ar'); setIsLangMenuOpen(false); }} style={{ padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: '#000000', display: 'flex', justifyContent: 'space-between', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                  <span>العربية</span>
                  {language === 'ar' && <span style={{ color: '#ff9f1c', fontWeight: 'bold' }}>✓</span>}
                </button>
              </div>
            )}
          </li>

         
          <li><a href="#hero" style={getLinkStyle('hero')} onClick={() => setActiveSection('hero')}>{language === 'tr' ? 'Anasayfa' : language === 'en' ? 'Home' : 'الرئيسية'}</a></li>
          <li><a href="#menu" style={getLinkStyle('menu')} onClick={() => setActiveSection('menu')}>{language === 'tr' ? 'Menü' : language === 'en' ? 'Menu' : 'القائمة'}</a></li>
          
          <li>
            <a href="#cart" style={getLinkStyle('cart')} onClick={() => setActiveSection('cart')}>
             
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                <span>{language === 'tr' ? 'Sepetim' : language === 'en' ? 'My Basket' : 'سلتي'}</span> 
                {totalItemsCount > 0 && <span style={badgeStyle}>{totalItemsCount}</span>}
              </div>
            </a>
          </li>

          <li><a href="#about" style={getLinkStyle('about')} onClick={() => setActiveSection('about')}>{language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'من نحن'}</a></li>
          <li><a href="#testimonials" style={getLinkStyle('testimonials')} onClick={() => setActiveSection('testimonials')}>{language === 'tr' ? 'Yorumlar' : language === 'en' ? 'Reviews' : 'الآراء'}</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;