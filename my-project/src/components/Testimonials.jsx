import React, { useState } from 'react';

function Testimonials({ language }) {
  const [reviews, setReviews] = useState([]);
  
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim() || !userName.trim()) return;

    const newReview = {
      id: Date.now(),
      name: userName, 
      comment: comment,
      rating: selectedRating,
      img: 'https://placehold.co/100x100/e0e0e0/999999?text=Profil'
    };

    setReviews([newReview, ...reviews]);
    setComment('');
    setUserName('');
    setSelectedRating(5);
  };

  return (
    <section id="testimonials" style={{ padding: '80px 8%', backgroundColor: '#fff', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#222', fontWeight: 'bold' }}>
        {language === 'tr' ? 'Müşteri Yorumları' : language === 'en' ? 'Customer Reviews' : 'آراء العملاء'}
      </h2>

      <div style={{ maxWidth: '500px', margin: '0 auto 50px auto', padding: '25px', backgroundColor: '#fafafa', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: language === 'ar' ? 'right' : 'left', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        
        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333' }}>
          {language === 'tr' ? 'Yorum Yapın' : language === 'en' ? 'Leave a Review' : 'أضف تعليقاً'}
        </h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder={language === 'tr' ? 'Adınız' : language === 'en' ? 'Your Name' : 'اسمك'} 
            required 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box', fontFamily: 'inherit' }} 
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: language === 'ar' ? 'row-reverse' : 'row', justifyContent: language === 'ar' ? 'flex-end' : 'flex-start' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#555' }}>
              {language === 'tr' ? 'değerlemeniz:' : language === 'en' ? 'Your Rating:' : 'تقييمك:'}
            </span>
            <div style={{ display: 'flex', gap: '2px', flexDirection: 'row' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  onClick={() => setSelectedRating(star)} 
                  onMouseEnter={() => setHoverRating(star)} 
                  onMouseLeave={() => setHoverRating(0)}
                  style={{ fontSize: '1.6rem', cursor: 'pointer', color: star <= (hoverRating || selectedRating) ? '#ff9f1c' : '#ccc', transition: 'color 0.1s' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder={language === 'tr' ? 'Deneyiminizi yazın...' : language === 'en' ? 'Write your experience...' : 'اكتبي تجربتك هنا...'} 
            required 
            style={{ width: '100%', height: '100px', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} 
          />

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#222'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#000'}>
            {language === 'tr' ? 'Yorum Gönder' : language === 'en' ? 'Submit Review' : 'إرسال التعليق'}
          </button>
        </form>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        {reviews.length === 0 ? (
          <p style={{ color: '#999', fontSize: '1.1rem', marginTop: '20px' }}>
            {language === 'tr' 
              ? 'Henüz yorum yapılmamış. İlk yorumu siz yapın!' 
              : language === 'en' 
              ? 'No reviews yet. Be the first to leave a review!' 
              : 'لا توجد تعليقات بعد. كون/ي أول من يضيف تعليقاً!'}
          </p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} style={{ backgroundColor: '#fafafa', borderRadius: '15px', padding: '30px', width: '300px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: language === 'ar' ? 'right' : 'left', border: '1px solid #f0f0f0' }}>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                "{review.comment}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                <img src={review.img} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                  <h4 style={{ margin: 0, color: '#222', fontSize: '1.1rem', fontWeight: '600' }}>{review.name}</h4>
                  <div style={{ fontSize: '1.1rem', marginTop: '3px', display: 'flex', gap: '2px', justifyContent: language === 'ar' ? 'flex-end' : 'flex-start' }}>
                    <span style={{ color: '#ff9f1c' }}>{'★'.repeat(review.rating)}</span>
                    <span style={{ color: '#ccc' }}>{'☆'.repeat(5 - review.rating)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Testimonials;