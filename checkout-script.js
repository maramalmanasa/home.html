// دالة لمعالجة إرسال نموذج الدفع
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي

    // جمع بيانات الحجز من نموذج العميل
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    const roomType = document.getElementById('roomType').value;

    // جمع بيانات الدفع
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // هنا يمكنك إضافة كود لإرسال بيانات الحجز والدفع إلى قاعدة بيانات أو بوابة الدفع
    console.log('بيانات الحجز:', { name, email, phone, arrival, departure, roomType });
    console.log('بيانات الدفع:', { cardNumber, expiry, cvv });

    alert('تم تأكيد الدفع بنجاح! سيتم إرسال تأكيد إلى بريدك الإلكتروني.');

    // يمكنك هنا إعادة توجيه المستخدم إلى صفحة تأكيد الحجز
});