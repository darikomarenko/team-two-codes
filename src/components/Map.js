import '../assets/styles/map.scss';

export function renderMap() {
    const map = document.getElementById('map');
    map.innerHTML = /*html*/`
    
<div class="map-container">
<div class="map-map-module"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.9941632604596!2d-73.34895642414094!3d40.82809187137634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82f18626b5ff9%3A0xb48011a37f611a49!2sRoyal%20Ln%2C%20Dix%20Hills%2C%20NY%2011746%2C%20USA!5e0!3m2!1sen!2sru!4v1727530819796!5m2!1sen!2sru" width="100%" height="560" style="border:0;" allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<div class="map-sign-up-form-wrapper">
<div class="map-sign-up-form">
    <div class="map-sign-up-title">Sign up for our newsletter</br>to get weekly updates.<div class="map-sign-up-title-bg">Newsletter</div> </div>
    <div class="map-sign-up-input-container">
        <input class="map-sign-up-input" type="text" placeholder="Enter Your Email">
        <button class="map-sign-up-btn"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="#FB5B11">
            <rect y="0.0957031" width="38" height="31.3735" fill="white"/>
            <path d="M13.643 20.3345C13.4458 20.5279 13.4458 20.8413 13.643 21.0346C13.8402 21.2279 14.1598 21.2279 14.357 21.0346L13.643 20.3345ZM24.5049 10.8803C24.5049 10.6069 24.2789 10.3853 24 10.3853L19.4557 10.3853C19.1769 10.3853 18.9508 10.6069 18.9508 10.8803C18.9508 11.1537 19.1769 11.3754 19.4557 11.3754L23.4951 11.3754L23.4951 15.3356C23.4951 15.609 23.7211 15.8307 24 15.8307C24.2789 15.8307 24.5049 15.609 24.5049 15.3356L24.5049 10.8803ZM14.357 21.0346L24.357 11.2304L23.643 10.5303L13.643 20.3345L14.357 21.0346Z"/>
            </svg></button>
    </div>
</div>
</div>
</div>
    `;
};
