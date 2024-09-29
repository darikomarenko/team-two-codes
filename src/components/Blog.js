import '../assets/styles/blog.scss';

export function renderBlog() {
    const blog = document.getElementById('blog');
    blog.innerHTML = /*html*/`
    <div class="blog-container">
    <h5 class="blog__h5"> <img src="../public/images/Video-block/Line.png" alt="line" class="blog__line"> Our Blog</h5>
    <h2 class="blog__h2">Latest Insights and Updates</h2>
    <div class="blog-big-card-container">

    <div class="big-card__body">
        <div class="blog-card__author">
            <img src="/public/images/Blog/line.png" class="blog-card__author-line">
            <div class="blog-card__author-name">By Admin</div>
            <svg class="blog-card__author-bullet xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
            <circle cx="3" cy="3" r="3" fill="#0E0E0E"/>
            </svg>
            <div class="blog-card__author-category">Building</div>
        </div>
    <div class="blog-card__title">Stay up-to-date with the latest happenings.</div>
    <div class="blog-text">Stay informed with our regular updates on significant events, regulatory changes, and market trends. We cover a wide range of topics, from new technological.</div>
    <div class="blog-card__button">
    <div class="blog-card__button-text">Read More</div>
    <div class="blog-card__button-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="#0E0E0E">
    <path d="M1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5L1 4.5ZM25.3536 3.64645C25.5488 3.84171 25.5488 4.15829 25.3536 4.35355L22.1716 7.53553C21.9763 7.7308 21.6597 7.7308 21.4645 7.53553C21.2692 7.34027 21.2692 7.02369 21.4645 6.82843L24.2929 4L21.4645 1.17157C21.2692 0.976311 21.2692 0.659728 21.4645 0.464466C21.6597 0.269204 21.9763 0.269204 22.1716 0.464466L25.3536 3.64645ZM1 3.5L25 3.5V4.5L1 4.5L1 3.5Z"/></svg></div>
    </div>
    </div>
    <img class="big-card__image" src="/public/images/Blog/big_card.png" alt="worker">
    </div>

    <div class="blog-cards-container">
        <div class="blog-card">
        <img class="blog-card__image" src="/public/images/Blog/pic1.png" alt="worker">
            <div class="blog-card__author">
                <img src="/public/images/Blog/line.png" class="blog-card__author-line">
                <div class="blog-card__author-name">By Admin</div>
                <svg class="blog-card__author-bullet xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#0E0E0E"/>
              </svg>
                <div class="blog-card__author-category">Building</div>
            </div>
            <div class="blog-card__title">Practical advice and building step-by-step.</div>
            <div class="blog-card__button">
                <div class="blog-card__button-text">Read More</div>
                <div class="blog-card__button-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="#0E0E0E">
                <path d="M1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5L1 4.5ZM25.3536 3.64645C25.5488 3.84171 25.5488 4.15829 25.3536 4.35355L22.1716 7.53553C21.9763 7.7308 21.6597 7.7308 21.4645 7.53553C21.2692 7.34027 21.2692 7.02369 21.4645 6.82843L24.2929 4L21.4645 1.17157C21.2692 0.976311 21.2692 0.659728 21.4645 0.464466C21.6597 0.269204 21.9763 0.269204 22.1716 0.464466L25.3536 3.64645ZM1 3.5L25 3.5V4.5L1 4.5L1 3.5Z"/>
              </svg></div>
            </div>
        </div>
        <div class="blog-card">
        <img class="blog-card__image" src="/public/images/Blog/pic2.png" alt="worker">
            <div class="blog-card__author">
            <img src="/public/images/Blog/line.png" class="blog-card__author-line">
                <div class="blog-card__author-name">By Admin</div>
                <svg class="blog-card__author-bullet xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#0E0E0E"/>
              </svg>
                <div class="blog-card__author-category">Building</div>
            </div>
            <div class="blog-card__title">Insights perspective industry
            from our team.</div>
            <div class="blog-card__button">
                <div class="blog-card__button-text">Read More</div>
                <div class="blog-card__button-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="#0E0E0E">
                <path d="M1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5L1 4.5ZM25.3536 3.64645C25.5488 3.84171 25.5488 4.15829 25.3536 4.35355L22.1716 7.53553C21.9763 7.7308 21.6597 7.7308 21.4645 7.53553C21.2692 7.34027 21.2692 7.02369 21.4645 6.82843L24.2929 4L21.4645 1.17157C21.2692 0.976311 21.2692 0.659728 21.4645 0.464466C21.6597 0.269204 21.9763 0.269204 22.1716 0.464466L25.3536 3.64645ZM1 3.5L25 3.5V4.5L1 4.5L1 3.5Z"/>
              </svg></div>
            </div>
        </div>
        <div class="blog-card">
            <img class="blog-card__image" src="/public/images/Blog/pic3.png" alt="worker">
            <div class="blog-card__author">
            <img src="/public/images/Blog/line.png" class="blog-card__author-line">
                <div class="blog-card__author-name">By Admin</div>
                <svg class="blog-card__author-bullet xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#0E0E0E"/>
              </svg>
                <div class="blog-card__author-category">Building</div>
            </div>
            <div class="blog-card__title">most successful projects best
            building case studies.</div>
            <div class="blog-card__button">
                <div class="blog-card__button-text">Read More</div>
                <div class="blog-card__button-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="#0E0E0E">
                <path d="M1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5L1 4.5ZM25.3536 3.64645C25.5488 3.84171 25.5488 4.15829 25.3536 4.35355L22.1716 7.53553C21.9763 7.7308 21.6597 7.7308 21.4645 7.53553C21.2692 7.34027 21.2692 7.02369 21.4645 6.82843L24.2929 4L21.4645 1.17157C21.2692 0.976311 21.2692 0.659728 21.4645 0.464466C21.6597 0.269204 21.9763 0.269204 22.1716 0.464466L25.3536 3.64645ZM1 3.5L25 3.5V4.5L1 4.5L1 3.5Z"/>
              </svg></div>
            </div>
        </div>
    </div>
    <button class="blog-btn">Read more<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="#0E0E0E">
    <path d="M0.247423 16.3415C-0.116259 16.7571 -0.0741412 17.3889 0.341495 17.7526C0.757132 18.1163 1.38889 18.0741 1.75258 17.6585L0.247423 16.3415ZM15.9978 0.933481C15.961 0.38242 15.4845 -0.0345222 14.9335 0.00221496L5.95341 0.600887C5.40235 0.637624 4.98541 1.11413 5.02215 1.66519C5.05889 2.21625 5.53539 2.63319 6.08645 2.59646L14.0687 2.0643L14.6009 10.0466C14.6376 10.5976 15.1141 11.0146 15.6652 10.9779C16.2163 10.9411 16.6332 10.4646 16.5965 9.91355L15.9978 0.933481ZM1.75258 17.6585L15.7526 1.65851L14.2474 0.341496L0.247423 16.3415L1.75258 17.6585Z"/>
  </svg></button>
    </div>
    `;
};
