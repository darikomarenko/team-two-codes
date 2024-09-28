import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderVideoBlock } from './components/Video-block.js';


document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderVideoBlock()
  renderFooter();
});
