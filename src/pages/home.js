export default function homePage() {
  const homeDiv = document.createElement('DIV');
  homeDiv.className = 'pages home-pages';

  const html = `
    <div class="intro">
    <h1>WELCOME TO ARIYA KITCHEN</h1>
    <button type="button" class="cta-btn">Check our menu</button>
    </div>
   `;
  homeDiv.insertAdjacentHTML('beforeend', html);
  return homeDiv;
}