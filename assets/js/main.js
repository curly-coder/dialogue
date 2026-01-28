document.getElementById('burger-menu').addEventListener('click', function() {
  const navList = document.querySelector('.header-nav-list');
  navList.classList.toggle('active');
  this.classList.toggle('active');
});

// Открытие модального окна
document.getElementById('open-modal').addEventListener('click', function() {
  document.getElementById('modal-overlay').style.display = 'flex';
});

document.getElementById('open-modal-method').addEventListener('click', function() {
  document.getElementById('modal-overlay').style.display = 'flex';
});

// Закрытие модального окна
document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('modal-overlay').style.display = 'none';
});

// Закрытие модального окна при клике вне области модального окна
document.getElementById('modal-overlay').addEventListener('click', function(event) {
  if (event.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').style.display = 'none';
  }
});


document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем класс 'active' у всех кнопок и вкладок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Добавляем класс 'active' на текущую кнопку и вкладку
            button.classList.add('active');
            const targetTab = document.querySelector(`.tab-content.${button.dataset.tab}`);
            targetTab.classList.add('active');
        });
    });
});


const track = document.querySelector('.testimonial-track'); const cards = document.querySelectorAll('.testimonial-card'); const dots = document.querySelectorAll('.dot'); let currentIndex = 0; const cardsPerSlide = 3; const totalSlides = Math.ceil(cards.length / cardsPerSlide); function updateSlider() { const cardWidth = cards[0].offsetWidth + 20;  track.style.transform = `translateX(-${currentIndex * cardsPerSlide * cardWidth}px)`; dots.forEach((dot, i) => { dot.classList.toggle('active', i === currentIndex); }); } dots.forEach((dot, i) => { dot.addEventListener('click', () => { currentIndex = i; updateSlider(); }); });  function nextSlide() { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); } function prevSlide() { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider();}