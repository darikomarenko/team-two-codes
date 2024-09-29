import '../assets/styles/video-block.scss';

export function renderVideoBlock() {
    const videoBlock = document.getElementById('videoBlock');
    videoBlock.innerHTML = `
    <div class="videoBlock">
        <div class="videoBlock__main">
        <h5 class="videoBlock__h5"> <img src="../public/images/Video-block/Line.png" alt="line" class="videoBlock__line"> How To Process</h5>
            <h2 class="videoBlock__h2">Steps in the Construction Process</h2>
            <div class="videoBlock__tabs">
                <button data-video="https://www.youtube.com/embed/xwH6Gvw8YUE" class="active">01. Planning and Design</button>
                <button data-video="https://www.youtube.com/embed/S0EAwxjM6dc">02. Permitting and Approvals</button>
                <button data-video="https://www.youtube.com/embed/jeodjysbsCs">03. Foundation Construction</button>
            </div>
            <div class="videoBlock__content" style="position: relative;">
                <iframe id="videoPlayer" src="https://www.youtube.com/embed/xwH6Gvw8YUE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div id="spinner" class="spinner"></div> <!-- Спиннер по центру -->
            </div>
        </div>
        <div class="videoBlock__aside">
            <img class="videoBlock__img" src="./public/images/Video-block/Architecture.png" alt="Architecture">
        </div>
    </div>
    `;

  
    const tabs = document.querySelectorAll('.videoBlock__tabs button');
    const videoPlayer = document.getElementById('videoPlayer');
    const spinner = document.getElementById('spinner');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {  
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            spinner.style.display = 'block';
            const videoSrc = this.getAttribute('data-video');
            videoPlayer.src = videoSrc;  
            //  обработчик события загрузки iframe
            videoPlayer.onload = function () {
                spinner.style.display = 'none';
            };
        });
    });
}


