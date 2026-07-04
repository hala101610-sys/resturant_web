import React, { useState } from 'react';

function Products({ addToCart, language }) {
  const [activeTab, setActiveTab] = useState('foods');
 
  const foods = [
    { id: 1, name: { tr: 'Tavuk Şiş', en: 'Chicken Shish', ar: 'شيش طاووق' }, price: 290, img: '/Şiş.jpg' },
    { id: 2, name: { tr: 'Lahmacun', en: 'Lahmacun', ar: 'لحم بعجين' }, price: 170, img: '/lahmacun.webp' },
    { id: 3, name: { tr: 'Kıymalı Pide', en: 'Minced Meat Pide', ar: 'فطيرة باللحم المفروم' }, price: 250, img: '/Kiymali-Pide.jpeg' },
    { id: 4, name: { tr: 'İskender Kebap', en: 'Iskender Kebab', ar: 'إسكندر كباب' }, price: 420, img: '/iskender-kebab.jpg' },
  ];

  const drinks = [
    { id: 5, name: { tr: 'Espresso', en: 'Espresso', ar: 'إسبريسو' }, price: 100, img: '/Espresso.jpg' },
    { id: 6, name: { tr: 'Limonata', en: 'Lemonade', ar: 'ليموناضة' }, price: 120, img: '/Limonata.jpg' },
    { id: 7, name: { tr: 'Su', en: 'Water', ar: 'ماء' }, price: 30, img: '/Su.jpg' },
  ];

  const desserts = [
    { id: 8, name: { tr: 'Cheesecake', en: 'Cheesecake', ar: 'تشيز كيك' }, price: 220, img: '/Cheesecake.jpg' },
    { id: 9, name: { tr: 'Havuçlu Kek', en: 'Carrot Cake', ar: 'كيكة الجزر' }, price: 190, img: '/Havuçlu Kek.jpg' },
    { id: 10, name: { tr: 'Sütlaç', en: 'Sutlac (Rice Pudding)', ar: 'سوتلاج (أرز بحليب)' }, price: 170, img: '/Sütlaç.jpg' },
  ];

  const currentItems = activeTab === 'foods' ? foods : activeTab === 'drinks' ? drinks : desserts;

  const tabButtonStyle = (tabName) => ({
    padding: '10px 30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '2px solid #000',
    backgroundColor: activeTab === tabName ? '#000' : '#fff',
    color: activeTab === tabName ? '#fff' : '#000',
    borderRadius: '25px',
    transition: '0.3s',
    outline: 'none'
  });

  return (
    <section id="menu" style={{ padding: '60px 8%', backgroundColor: '#fff', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>
        {language === 'tr' ? 'Menümüz' : language === 'en' ? 'Our Menu' : 'قائمتنا'}
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
        <button style={tabButtonStyle('foods')} onClick={() => setActiveTab('foods')}>{language === 'tr' ? 'Yiyecekler' : language === 'en' ? 'Foods' : 'المأكولات'}</button>
        <button style={tabButtonStyle('drinks')} onClick={() => setActiveTab('drinks')}>{language === 'tr' ? 'İçecekler' : language === 'en' ? 'Drinks' : 'المشروبات'}</button>
        <button style={tabButtonStyle('desserts')} onClick={() => setActiveTab('desserts')}>{language === 'tr' ? 'Tatlılar' : language === 'en' ? 'Desserts' : 'الحلويات'}</button>
      </div>
      

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        {currentItems.map((item) => (
          <div key={item.id} style={{ backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', padding: '20px', width: '280px', textAlign: 'center' }}>
            <img src={item.img} alt={item.name[language]} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.3rem', margin: '15px 0 25px 0', color: '#333' }}>{item.name[language]}</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#222', direction: 'ltr' }}>
                {item.price} {language === 'ar' ? 'ل.ت' : 'TL'}
              </span>
              
              <button 
                onClick={() => addToCart(item)}
                style={{ padding: '8px 20px', border: '1px solid #ff9f1c', borderRadius: '20px', backgroundColor: '#fff', color: '#ff9f1c', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
                onMouseOver={(e) => { e.target.style.backgroundColor = '#ff9f1c'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#ff9f1c'; }}
              >
                {language === 'tr' ? 'Sepete Ekle' : language === 'en' ? 'Add To Basket' : 'إضافة للسلة'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;