const bookButtons = document.querySelectorAll('.book-button');
const bookingForm = document.getElementById('bookingForm');
const selectedHotel = document.getElementById('selectedHotel');
const selectedPrice = document.getElementById('selectedPrice');
const bookingDetailsForm = document.getElementById('bookingDetailsForm');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hotel = button.dataset.hotel;
        const price = button.dataset.price;

        selectedHotel.textContent = hotel;
        selectedPrice.textContent = price;

        bookingForm.style.display = 'block';
    });
});

bookingDetailsForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

     
    alert('تم تأكيد الحجز!');
});
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.parentElement.parentElement;
        const itemName = menuItem.querySelector('h3').textContent;
        const itemPrice = menuItem.querySelector('p:last-of-type').textContent;

         
        alert(`تم إضافة ${itemName} (${itemPrice}) إلى سلة التسوق!`);
    });
});
const reserveButton = document.querySelector('.reserve-button');

reserveButton.addEventListener('click', () => {
    // نك إضافة كود لمعالجة طلب الحجز هنا
    alert('شكراً لحجزك في مطعمنا!');
});
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.dataset.name;
        const itemPrice = button.dataset.price;

        // يمكنك إضافة كود لإضافة العنصر إلى سلة التسوق هنا
        alert(`تم إضافة ${itemName} (${itemPrice} دولار) إلى سلة التسوق!`);
    });
});