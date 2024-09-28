import { renderHeader } from './components/Header.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderMap();
  renderFooter();
});
