import { renderHeader } from './components/Header.js';
import { renderTheBestServices} from './components/TheBestServices.js';
import { renderFooter } from './components/Footer.js';
import { renderSliderTheBestServices } from './components/SliderTheBestServices.js';
import { renderWhatAbout } from './components/WhatAbout.js';
import renderTrustReliable from './components/TrustReliable.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderTheBestServices();
  renderSliderTheBestServices();
  renderWhatAbout();
  renderTrustReliable();
  renderFooter();
});
