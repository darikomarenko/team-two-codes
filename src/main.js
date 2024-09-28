import { renderHeader } from './components/Header.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderBanner } from './components/Banner.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderMap();
  renderFooter();
  renderBanner();
});
