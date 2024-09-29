import '../assets/styles/header.scss';

export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML =  /*html*/`
    <div class="navbar__adaptive">
    <span>
        <img src="../../public/images/Header/house.svg" alt="logo">
        <div>Conbuild</div>
    </span>
    <div id="burger-menu" class="burger-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
<nav class="navbar">
    <div class="navbar__logo">
        <img src="../../public/images/Header/logo.svg" alt="logo">
    </div>
    <div class="navbar__info">
            <ul class="navbar__info_top">
                <li>
                    <img src="../../public/images/Header/pin.svg" alt="pin">
                    2464 Royal Ln. Mesa, New York
                </li>
                <li>
                    <img src="../../public/images/Header/mail.svg" alt="mail">
                    Info @golzergmail.com
                </li>
                <li>
                    <img src="../../public/images/Header/clock.svg" alt="clock">
                    Mon - Sat 8:00 - 18:20
                </li>
                <li class="navbar__info_top_links">
                <div class="icon-container">
                    <img src="../../public/images/Header/facebook.svg" alt="facebook">
                </div>
                <div class="icon-container">
                    <img src="../../public/images/Header/inst.svg" alt="instagram">
                </div>
                <div class="icon-container">
                    <img src="../../public/images/Header/twitter.svg" alt="twitter">
                </div>
                <div class="icon-container">
                    <img src="../../public/images/Header/linkedIn.svg" alt="linkedIn">
                </div>
                </li>
            </ul>
            <ul class="navbar__info_bottom">
              <div class="navbar__info_links">
                  <li><a href="#banner">Home</a></li>
                  <li><a href="#whatAboutOur">About</a></li>
                  <li><a href="#theBestService">Projects</a></li>
                  <li><a href="#reviews">Testimonials</a></li>
                  <li><a href="#members">Team</a></li>
                  <li><a href="#prices">Pricing</a></li>
                  <li><a href="#prices">Blog</a></li>
                  <li><a href="#footer">Contact</a></li>
              </div>
        </ul>
    </div>
    <div class="navbar__contact">
        <img src="../../public/images/Header/phone.svg" alt="contact icon">
        <div class="navbar__contact_tel">Call us any time <br> (704) 555-0127</div>
    </div>
  </nav>
  `;

  const burgerMenu = document.getElementById('burger-menu');
  let menuVisible = false;

  burgerMenu.addEventListener('click', () => {
      if (!menuVisible) {
          const newMenu = document.createElement('div');
          newMenu.classList.add('burger-menu-dropdown');
          newMenu.innerHTML = /*html*/ `
              <ul class="menu-list">
              <li><a href="#banner">Home</a></li>
              <li><a href="#whatAboutOur">About</a></li>
              <li><a href="#theBestService">Projects</a></li>
              <li><a href="#reviews">Testimonials</a></li>
              <li><a href="#members">Team</a></li>
              <li><a href="#prices">Pricing</a></li>
              <li><a href="#prices">Blog</a></li>
              <li><a href="#footer">Contact</a></li>
              </ul>
          `;
          header.appendChild(newMenu);
          menuVisible = true;
      } else {
          const dropdownMenu = document.querySelector('.burger-menu-dropdown');
          if (dropdownMenu) dropdownMenu.remove();
          menuVisible = false;
      }
  });
};
