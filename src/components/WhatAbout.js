import '../assets/styles/whatAbout.scss';
import renderSlider from './SliderWhatAbout';

export function renderWhatAbout() {
    const whatAboutOur = document.getElementById('whatAboutOur');

    whatAboutOur.innerHTML = /*html*/`
    <div class="whatAbout__container">
          <div class="whatAbout__block">
            <div class="whatAbout__block-teame">
              <p class="whatAbout__block-chapter"><span class="whatAbout__block-span">—</span> About Us</p>
              <h2 class="whatAbout__block-title">What about Our Industry Performance.</h2>
            </div>
            <div class="whatAbout__block-description">
              <p class="whatAbout__block-descriptionText">In today's world, we're bombarded with choices. From streaming services to meal kits, it can be overwhelming.</p>
              <div class="whatAbout__block-section">
                <button class="whatAbout__block-btn">Read More<img src="../../public/images/WhatAbout/arrow-white.png" class="whatAbout__block-btnImg" alt="arrow white"></button>
                <div>
                    <p class="whatAbout__block-portrait">25+ Experience</p>
                    <p class="whatAbout__reflection">25+ Experience</p>
                </div class="whatAbout__block-slider">
                
              </div>
            </div>
          </div>
          <div class="whatAbout__slider-cont"></div>
        </div>
        <img src="../../public/images/WhatAbout/Architecture.png" class="whatAbout__architecture" alt="Architecture right">
    `;

    
    renderSlider(document.querySelector(".whatAbout__slider-cont"));
}