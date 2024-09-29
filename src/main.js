import { renderHeader } from './components/Header.js';
import { renderBlog } from './components/Blog.js';
import { renderMap } from './components/Map.js';
import { renderFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderBlog();
  renderMap();
  renderFooter();
});
