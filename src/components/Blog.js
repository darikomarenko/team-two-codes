import '../assets/styles/blog.scss';

export function renderBlog() {
    const blog = document.getElementById('blog');
    blog.innerHTML = /*html*/`
    <div class="blog-container">

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
        <img class="blog-card__image" src="/public/images/Blog/pic1.png" alt="worker">
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
            <img class="blog-card__image" src="/public/images/Blog/pic1.png" alt="worker">
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
    
    </div>
    `;
};
