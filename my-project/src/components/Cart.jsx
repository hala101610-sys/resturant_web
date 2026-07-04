import React from 'react';

function Cart({ cartItems, removeFromCart, clearCart, language }) {

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section id="cart" style={{ padding: '60px 8%', backgroundColor: '#fafafa', fontFamily: 'system-ui, sans-serif', textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#222', fontWeight: 'bold' }}>
        {language === 'tr' ? 'Sepetiniz' : language === 'en' ? 'Your Basket' : 'سلتك'}
      </h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        {cartItems.length === 0 ? (
          <p style={{ color: '#999', fontSize: '1.1rem', margin: '20px 0' }}>
            {language === 'tr' ? 'Sepetiniz henüz boş. Menümüzden ekleyin!' : language === 'en' ? 'Your Basket is empty. Add something from our menu!' : 'سلتكِ فارغة حالياً! أضيفي بعض الأطباق من قائمتنا.'}
          </p>
        ) : (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', borderBottom: '1px solid #f0f0f0', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                  
                  <div style={{ textAlign: language === 'ar' ? 'right' : 'left', flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0', color: '#222', fontSize: '1.1rem' }}>
                      {item.name[language]}
                    </h4>
                    <span style={{ color: '#666', fontSize: '0.9rem', display: 'inline-block', direction: 'ltr' }}>
                      {item.price} {language === 'ar' ? 'ل.ت' : 'TL'} x {item.quantity}
                    </span>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ backgroundColor: 'transparent', color: '#ff3b30', border: 'none', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    {language === 'tr' ? 'Sil' : language === 'en' ? 'Remove' : 'حذف'}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '2px solid #000', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000' }}>
                {language === 'tr' ? 'Toplam Tutar: ' : language === 'en' ? 'Total Amount: ' : 'إجمالي المبلغ: '}
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff9f1c', direction: 'ltr' }}>
                {totalPrice} {language === 'ar' ? 'ل.ت' : 'TL'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginTop: '30px', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
              <button onClick={clearCart} style={{ flex: 1, padding: '12px', backgroundColor: '#fff', color: '#000', border: '2px solid #000', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
                {language === 'tr' ? 'Sepeti Temizle' : language === 'en' ? 'Clear Cart' : 'تفريغ السلة'}
              </button>
              <button 
                onClick={() => alert(language === 'tr' ? 'Siparişiniz alındı! Afiyet olsun.' : language === 'en' ? 'Your order has been received! Bon appétit.' : 'تم استلام طلبكِ بنجاح! بالهناء والشفاء.')} 
                style={{ flex: 2, padding: '12px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {language === 'tr' ? 'Siparişi Tamamla' : language === 'en' ? 'Checkout' : 'إتمام الطلب'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;