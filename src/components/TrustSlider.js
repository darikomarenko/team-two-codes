import '../assets/styles/trustSlider.scss';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export function renderTrustSlider() {
    const trustSlider = document.getElementById('trustSlider');
    trustSlider.innerHTML = `
    <div class="trustSlider">
    <h5 class="trustSlider__title"> <img src="../public/images/Video-block/Line.png" alt="line" class="trustSlider__line"> Our project</h5>
    <h2 class="trustSlider__subtitle">Trusted & Reliable</h2>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../public/images/TrustSlider/Slide1.jpg" alt="Slide 1"></div>
                <div class="swiper-slide"><img src="../public/images/TrustSlider/Slide2.jpg" alt="Slide 2"></div>
                <div class="swiper-slide"><img src="../public/images/TrustSlider/Slide3.jpg" alt="Slide 3"></div>
                <div class="swiper-slide"><img src="../public/images/TrustSlider/Slide4.jpg" alt="Slide 4"></div>
                <div class="swiper-slide"><img src="../public/images/TrustSlider/Slide5.jpg" alt="Slide 5"></div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>`;

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: false,
        loop: true,
    });
};
