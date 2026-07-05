import React from 'react';

function Footer({ language }) {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '50px 8% 20px 8%', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '30px', 
        marginBottom: '40px', 
        textAlign: language === 'ar' ? 'right' : 'left',
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}>
        
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{ color: '#ff9f1c', fontSize: '1.6rem', marginBottom: '15px' }}>Cafe & Restaurant</h3>
          <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
            {language === 'tr' 
              ? 'Lezzeti ve kaliteyi bir arada sunuyor, sizleri her zaman bekliyoruz.' 
              : language === 'en' 
              ? 'Combining taste and quality together, we are always waiting for you.' 
              : 'نجمع بين المذاق الفريد والجودة العالية، وننتظركم دائماً بشغف.'}
          </p>
        </div>

        <div style={{ flex: '1', minWidth: '150px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', borderBottom: '2px solid #ff9f1c', paddingBottom: '5px', display: 'inline-block' }}>
            {language === 'tr' ? 'Hızlı Bağlantılar' : language === 'en' ? 'Quick Links' : 'روابط سريعة'}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
            <li>
              <a href="#hero" style={{ color: '#aaa', textDecoration: 'none' }}>
                {language === 'tr' ? 'Anasayfa' : language === 'en' ? 'Home' : 'الرئيسية'}
              </a>
            </li>
            <li>
              <a href="#menu" style={{ color: '#aaa', textDecoration: 'none' }}>
                {language === 'tr' ? 'Menü' : language === 'en' ? 'Menu' : 'القائمة'}
              </a>
            </li>
            <li>
              <a href="#cart" style={{ color: '#aaa', textDecoration: 'none' }}>
                {language === 'tr' ? 'Sepetim' : language === 'en' ? 'Cart' : 'سلتي'}
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: '#aaa', textDecoration: 'none' }}>
                {language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'من نحن'}
              </a>
            </li>
            <li>
              <a href="#testimonials" style={{ color: '#aaa', textDecoration: 'none' }}>
                {language === 'tr' ? 'Yorumlar' : language === 'en' ? 'Reviews' : 'الآراء'}
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', borderBottom: '2px solid #ff9f1c', paddingBottom: '5px', display: 'inline-block' }}>
            {language === 'tr' ? 'İletişim' : language === 'en' ? 'Contact' : 'اتصلي بنا'}
          </h4>
          <p style={{ color: '#aaa', margin: '5px 0', direction: 'ltr', textAlign: language === 'ar' ? 'right' : 'left' }}>📧 info@caferestaurant.com</p>
          <p style={{ color: '#aaa', margin: '5px 0', direction: 'ltr', textAlign: language === 'ar' ? 'right' : 'left' }}>📞 +90 555 555 55 55</p>
          <p style={{ color: '#aaa', margin: '5px 0' }}>
            📍 {language === 'tr' ? 'İstanbul, Türkiye' : language === 'en' ? 'Istanbul, Turkey' : 'إسطنبول، تركيا'}
          </p>
        </div>

      </div>

      <hr style={{ borderColor: '#222', margin: '20px 0' }} />

      <div style={{ textAlign: 'center', color: '#777', fontSize: '0.9rem' }}>
        <p>
          © {new Date().getFullYear()} Cafe & Restaurant.
        </p>
      </div>
    </footer>
  );
}

export default Footer;