import '../assets/styles/reviews.scss';
import Swiper from 'swiper';

export function renderReviews() {
    const videoBlock = document.getElementById('reviews');
    videoBlock.innerHTML = `
    <div class="reviews">
    <div class="reviews__aside">
      <img class="reviews__img" src="./public/images/Reviews/Architecture.png" alt="Architecture">
    </div>
    <div class="reviews__main">
      <h5 class="reviews__h5">
        <img src="./public/images/Reviews/Line.png" alt="line" class="reviews__line">
        Our Testimonials
      </h5>
      <h2 class="reviews__h2">What our Clients Say About our work</h2>

      <div class="reviews__swiper-container swiper-container">
        <div class="reviews__swiper-wrapper swiper-wrapper">
          <div class="reviews__swiper-slide swiper-slide">
            <div class="reviews__testimonial">
              <div class="reviews__text-content">


                <p id="testimonial-text">Working with Consik was a fantastic experience. They truly understood our
                  vision
                  and turned our dream home into a reality. The attention to detail and dedication were
                  exceptional.</p>
                <div class="testimonial-account">
                  <div class="testimonial-quate">
                    <img src="./public/images/Reviews/Quate.png" alt="Quate" class="testimonial-quate-img">
                  </div>
                  <div class="testimonial-account-container">
                    <h3 id="testimonial-name">Brooklyn Simmons</h3>
                    <p id="testimonial-position">Architect Designer</p>
                  </div>
                </div>

              </div>

            </div>
            <div class="reviews__pagination">
              <div class="reviews__pointer"></div>
            </div>

            <div class="reviews__circle-images">
              <img src="person1.jpg" class="reviews__profile-photo reviews__profile-photo--active" data-index="0"
                alt="Brooklyn Simmons">
              <img src="person2.jpg" class="reviews__profile-photo" data-index="1" alt="Olivia Harper">
              <img src="person3.jpg" class="reviews__profile-photo" data-index="2" alt="Liam Bennett">
            </div>
          </div>
        </div>
      </div>
      <!-- Пагинация -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
    `;
  
    // Массив с отзывами
    const testimonials = [
        {
            text: "Working with Consik was a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were exceptional.",
            name: "Brooklyn Simmons",
            position: "Architect Designer"
        },
        {
            text: "The team at Consik exceeded our expectations. They provided creative solutions and were highly professional throughout the entire process. We couldn’t be happier with the result.",
            name: "Olivia Harper",
            position: "Interior Designer"
        },
        {
            text: "Consik’s professionalism and attention to detail were remarkable. They turned our vague ideas into a beautiful space that feels both modern and comfortable.",
            name: "Liam Bennett",
            position: "Project Manager"
        }
    ];
  
    // Инициализация Swiper
    const swiper = new Swiper('.reviews__swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
  
    // Получаем все фотографии (кругляшки)
    const profilePhotos = document.querySelectorAll('.reviews__profile-photo');
    const testimonialText = document.getElementById('testimonial-text');
    const testimonialName = document.getElementById('testimonial-name');
    const testimonialPosition = document.getElementById('testimonial-position');
  
    // Добавляем событие клика на каждую фотографию
    profilePhotos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            // Меняем отзыв, имя и должность
            testimonialText.textContent = testimonials[index].text;
            testimonialName.textContent = testimonials[index].name;
            testimonialPosition.textContent = testimonials[index].position;
  
            // Удаляем класс "active" у всех фото
            profilePhotos.forEach(p => p.classList.remove('reviews__profile-photo--active'));
  
            // Добавляем класс "active" на нажатое фото
            photo.classList.add('reviews__profile-photo--active');
      
            // Переключаем слайд Swiper
            swiper.slideTo(index);
        });
    });



    
}
