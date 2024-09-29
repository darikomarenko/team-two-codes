import '../assets/styles/banner.scss';

export function renderBanner() {
    const banner = document.getElementById('banner');
    banner.innerHTML = `
    <div class="banner">
        <div class="banner__text">
            <h1>Experts in<br>Construction</h1>
            <span>The construction industry boasts a diverse range of experts, each playing<br>a crucial role in bringing a project from vision to reality.</span>
            <button class="banner__button" type="button">Explore more
                <span class="arrow-icon">
                    <img src="../../public/images/Banner/arrow.svg" alt="arrow">
                </span>
            </button>
        </div>
        <div class="tractor">
            <img src="../../public/images/Banner/tractor.svg" alt="tractor">
        </div>
    </div>`;    
};
