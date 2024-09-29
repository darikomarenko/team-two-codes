import { renderHeader } from './components/Header.js';
import { renderTheBestServices} from './components/TheBestServices.js';
import { renderSliderTheBestServices } from './components/SliderTheBestServices.js';
import { renderWhatAbout } from './components/WhatAbout.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderBanner } from './components/Banner.js';
import { renderVideoBlock } from './components/Video-block.js';
import { renderReviews } from './components/Reviews.js';

import renderTrustReliable from './components/TrustReliable.js';
import { renderPrices } from './components/Prices.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderBanner();
  renderTheBestServices();
  renderSliderTheBestServices();
  renderWhatAbout();
  renderTrustReliable();
  renderVideoBlock();
  renderPrices();
  renderMap();
  renderFooter();
  renderReviews();
});
