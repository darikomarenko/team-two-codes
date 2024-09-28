import { renderHeader } from './components/Header.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';
import { renderBanner } from './components/Banner.js';
import { renderVideoBlock } from './components/Video-block.js';
import { renderReviews } from './components/Reviews.js';


document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderVideoBlock()
  renderMap();
  renderFooter();
  renderBanner();
  renderReviews()
});
