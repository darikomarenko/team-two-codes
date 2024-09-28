import { renderHeader } from './components/Header.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderVideoBlock } from './components/Video-block.js';


document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderMap();
  renderVideoBlock()
  renderFooter();
});
