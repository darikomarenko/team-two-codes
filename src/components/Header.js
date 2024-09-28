export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
      <h1>My Website</h1>
      <nav>
        <a href="#">Home</a> |
        <a href="#">About</a> |
        <a href="#">Contact</a>
      </nav>
    `;
};
