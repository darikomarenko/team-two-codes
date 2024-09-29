import '../assets/styles/prices.scss';

export function renderPrices() {
    const prices = document.getElementById('prices');
    prices.innerHTML = `
    <div class="prices">
    <div class="prices__wrapper">
    <h5 class="prices__title"> <img src="../public/images/Video-block/Line.png" alt="line" class="prices__line"> Our price table</h5>
        <h2 class="prices__subtitle">Solutions For Price table</h2>
        <div class="prices__cards">
            <div class="prices__cards_card">
                <div class="prices__cards_card-price">$19.99 /M</div>
                <div class="prices__cards_card-star"><img src="../../public/images/Prices/star.svg"/>Basic</div>
                <div class="prices__cards_card-points">
                    <ul>
                        <li>24/7 Free Hotline Service</li>
                        <li>Chat Support</li>
                        <li>5 Months After Delivery Support</li>
                        <li>Support with 8 Engineers</li>
                        <li>Team Management</li>
                        <li>Free Digital Marketing & Analysis</li>
                    </ul>
                </div>
                    <button class="prices__cards_card-button" type="button">Start free trial</button>
            </div>
            <div class="prices__cards_card">
            <div class="prices__cards_card-special-icon">
            <img src="../../public/images/Prices/special.svg" alt="Special Icon" /></div>
                <div class="prices__cards_card-price">$29.99 /M</div>
                <div class="prices__cards_card-star"><img src="../../public/images/Prices/star.svg"/>Standart</div>
                <div class="prices__cards_card-points">
                    <ul>
                        <li>24/7 Free Hotline Service</li>
                        <li>Chat Support</li>
                        <li>5 Months After Delivery Support</li>
                        <li>Support with 8 Engineers</li>
                        <li>Team Management</li>
                        <li>Free Digital Marketing & Analysis</li>
                    </ul>
                </div>
                    <button class="prices__cards_card-button" type="button">Start free trial</button>
            </div>
            <div class="prices__cards_card">
                <div class="prices__cards_card-price">$39.99 /M</div>
                <div class="prices__cards_card-star"><img src="../../public/images/Prices/star.svg"/>Premium</div>
                <div class="prices__cards_card-points">
                    <ul>
                        <li>24/7 Free Hotline Service</li>
                        <li>Chat Support</li>
                        <li>5 Months After Delivery Support</li>
                        <li>Support with 8 Engineers</li>
                        <li>Team Management</li>
                        <li>Free Digital Marketing & Analysis</li>
                    </ul>
                </div>
                    <button class="prices__cards_card-button" type="button">Start free trial</button>
            </div>
        </div>
    </div>
</div>
    `;
};
