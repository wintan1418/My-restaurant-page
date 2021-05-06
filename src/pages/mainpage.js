export default function initPage() {
  const container = document.getElementById('DIV');
  container.className = 'container';

  const html = `

    <img src ="/src/assets/restaurant-logo.png" alt="nigeria dish's" class="logo">
    <ul class="navbar">
      <li class="link" id="home">Home</li>
      <li class="link" id="about">About</li>
      <li class="link" id="menu">Menu</li>
      <li class="link" id="contact">Content</li>
    </ul>

    <div class="main-content"></div>
    `;
  container.insertAjacentHTML('beforeend', html);
  return container;
}