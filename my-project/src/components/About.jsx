import React from 'react';

function About({ language }) {
  const sectionStyle = {
    padding: '80px 8%',
    backgroundColor: '#fafafa',
    fontFamily: 'system-ui, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '50px',
    flexWrap: 'wrap',
    flexDirection: language === 'ar' ? 'row-reverse' : 'row'
  };

  const contentStyle = {
    flex: '1',
    minWidth: '300px',
    textAlign: language === 'ar' ? 'right' : 'left',
    direction: language === 'ar' ? 'rtl' : 'ltr'
  };

  const imageContainerStyle = {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222', fontWeight: 'bold' }}>
          {language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'من نحن'}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          {language === 'tr' 
            ? 'Cafe & Restaurant olarak, misafirlerimize taze malzemelerle hazırlanan lezzetli yemekler ve sıcak bir atmosfer sunuyoruz. Aileniz ve arkadaşlarınızla keyifli vakit geçirmeniz için kaliteli hizmet vermekten mutluluk duyuyoruz.' 
            : language === 'en' 
            ? 'As Cafe & Restaurant, we offer our guests delicious dishes prepared with fresh ingredients and a warm atmosphere. We are delighted to provide quality service for you to spend enjoyable time with your family and friends.' 
            : 'في كافيه ومطعمنا، نقدم لضيوفنا أشهى الأطباق المحضرة من مكونات طازجة في أجواء دافئة ومميزة. يسعدنا تقديم خدمة عالية الجودة لتستمتعوا بقضاء أجمل الأوقات مع عائلتكم وأصدقائكم.'}
        </p>
      </div>

      <div style={imageContainerStyle}>
        <img 
          src="/DOX_Location_Web.webp" 
          alt={language === 'tr' ? 'Hakkımızda Görseli' : language === 'en' ? 'About Us Image' : 'صورة قسم من نحن'} 
          style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        />
      </div>
    </section>
  );
}

export default About;