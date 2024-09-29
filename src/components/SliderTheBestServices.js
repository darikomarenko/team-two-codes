
import '../assets/styles/SliderTheBestServices.scss'

const path = '../../public/images/TheBestServices/';
const slides = [
    { src: path + "img (1).jpg", title: "Renewable Energy", sub: "This refers to energy sourced from natural processes" },
    { src: path + "img (2).jpg", title: "Building Contraction", sub: "This involves various stages likeplanning, design," },
    { src: path + "img (3).jpg", title: "Cybersecurity", sub: "Cybersecurity involves protecting systems, networks" },
    { src: path + "img (4).jpg", title: "Urban Development", sub: "Urban development includes the planning and construction" },
];



class Scrollable {
    pressed = false;
    startX = 0;
    scrollLeft = 0;

    constructor(el) {
        this.el = el;
        this._start = this.start.bind(this);
        this._stop = this.stop.bind(this);
        this._move = this.move.bind(this);

        el.addEventListener('mousemove', this._move, false);
        el.addEventListener('mousedown', this._start, false);
        el.addEventListener('mouseup', this._stop, false);
        el.addEventListener('mouseleave', this._stop, false);
    }

    start(e) {
        this.pressed = true;
        this.startX = e.pageX - this.el.offsetLeft;
        this.scrollLeft = this.el.scrollLeft;
    }

    stop(e) {
        this.pressed = false;
    }

    move(e) {
        e.preventDefault();
        if (this.pressed) {
            const x = e.pageX - this.el.offsetLeft;
            const scroll = x - this.startX;
            this.el.scrollLeft = this.scrollLeft - scroll;
        }
    }
}


function renderSlider(cont) {
    new Scrollable(cont);

    function addSlide(slide) {
        cont.innerHTML += `
        <div class="slide hidden" style="background-image: url('${(slide.src)}')" onclick="slideclick(this)">
            <div class="text">
                <p class="title slider-title">${slide.title}</p>
                <p class="sub" slider-sub>${slide.sub}</p>
            </div>
        </div>
        `;
    }

    for (let slide of slides) addSlide(slide);
    addSlide(slides[0]);

    cont.addEventListener('scroll', () => {
        [...cont.children].forEach(x => {
            x.classList.add('hidden');
            x.classList.remove('visible');
        });
        let w = cont.children[0].clientWidth;
        let slide = cont.children[Math.round((cont.scrollLeft + w / 2 - 1) / w)];
        slide.classList.remove('hidden');
        slide.classList.add('visible');
    });

    cont.children[0].classList.remove('hidden');

    setTimeout(() => {
        let w = cont.children[0].clientWidth;
        let W = cont.clientWidth;
        cont.scrollLeft = 1.5 * w - W / 2;
    }, 0);
}


export function renderSliderTheBestServices() {
    let cont = document.getElementsByClassName('theBestServices__blocks-slider');
    renderSlider(cont[0]);
}






