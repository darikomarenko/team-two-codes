import { renderHeader } from './components/Header.js';
import { renderTheBestServices} from './components/TheBestServices.js';
import { renderSliderTheBestServices } from './components/SliderTheBestServices.js';
import { renderWhatAbout } from './components/WhatAbout.js';
import { renderBlog } from './components/Blog.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderBanner } from './components/Banner.js';
import { renderVideoBlock } from './components/Video-block.js';
import { renderReviews } from './components/Reviews.js';

import renderTrustReliable from './components/TrustReliable.js';
import { renderPrices } from './components/Prices.js';
import { renderTrustSlider } from './components/TrustSlider.js';
import { renderMembers } from './components/Members.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderBanner();
  renderTheBestServices();
  renderSliderTheBestServices();
  renderWhatAbout();
  renderTrustReliable();
  renderTrustSlider();
  renderVideoBlock();
  renderBlog();
  renderVideoBlock();
  renderPrices();
  renderMap();
  renderFooter();
  renderReviews();
  renderMembers()
});
