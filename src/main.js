import { renderHeader } from './components/Header.js';
import { renderTheBestServices} from './components/TheBestServices.js';
import { renderSliderTheBestServices } from './components/SliderTheBestServices.js';
import { renderWhatAbout } from './components/WhatAbout.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderBanner } from './components/Banner.js';
import renderTrustReliable from './components/TrustReliable.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderTheBestServices();
  renderSliderTheBestServices();
  renderWhatAbout();
  renderTrustReliable();
  renderMap();
  renderFooter();
  renderBanner();
});
