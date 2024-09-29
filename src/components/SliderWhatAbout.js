import '../assets/styles/sliderWhatAbout.scss';

const path = '../../public/images/WhatAbout/';
const slides = [
    { src: path + "1.jpg", title: "Our Vision", sub: "+text\n+text\n+text" },
    { src: path + "2.jpg", title: "Core Values", sub: "+text\n+text\n+text" },
    { src: path + "3.jpg", title: "Community Engagement", sub: "+text\n+text\n+text" },
    { src: path + "4.jpg", title: "Our Vision", sub: "+text\n+text\n+text" },
    { src: path + "5.jpg", title: "Core Values", sub: "+text\n+text\n+text" },
    { src: path + "6.jpg", title: "Community Engagement", sub: "+text\n+text\n+text" },
];

let curslide = 0;

export default function renderSlider(cont) {
    let inner = '';
    for (let slide of slides) {
        inner += /*html*/`
        <div class="whatAbout__slide" style="background-image: url('${(slide.src)}')">
            <div class="whatAbout__text">
                <span class="whatAbout__title">${slide.title}</span>
                <span class="whatAbout__sub">${slide.sub}</span>
            </div>
        </div>
        `;
    }

    cont.innerHTML += /*html*/`
    <div class="whatAbout__slider">
        ${inner}
    </div>`;

    cont.innerHTML += /*html*/`
    <div class="whatAbout__nav">
        <img class="whatAbout__prev" src="${path + 'Arrow 3.png'}">
        <img class="whatAbout__next" src="${path + 'Arrow 2.png'}">
    </div>
    `;

    function moveSlide(dir) {
        curslide += dir;
        if (curslide >= slides.length) curslide = 0;
        if (curslide < 0) curslide = slides.length - 1;

        let wrap = cont.children[0];
        let w = wrap.scrollWidth / slides.length;
        let W = wrap.clientWidth;

        wrap.scrollLeft = w / 2 + curslide * w - W / 2;
    }

    document.querySelector('.whatAbout__prev').addEventListener('click', () => {
        moveSlide(-1);
    });
    document.querySelector('.whatAbout__next').addEventListener('click', () => {
        moveSlide(1);
    });
}
