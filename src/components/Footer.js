import '../assets/styles/footer.scss';

export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = /*html*/`
      <p>&copy; 2024 My Website</p>
    `;
};
