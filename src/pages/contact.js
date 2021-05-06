export default function contactPage() {
  const contactDiv = document.createElement('DIV');
  contactDiv.className = 'pages contact-page';

  const html = `
  <div class="contact-container">
      <div class="contact-details">
        <p class="contact-title>Contact Us</p>
        <p class="contact-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        // <img src= alt="phone number">
        <br><br>
        //
        <h3>Email Address!: Email@gmail.com</h3>  
      </div>
  </div>
  <iframe src="https://www.google.com/maps/@7.077286,4.825114,16z" width="675" height="740" frameborder="70" style="border:0;" allowfullscreen="" aria-hiden="false" tabindex="0"></iframe>
  `;
  contactDiv.insertAdjacentHTML('beforeend', html);
  return contactDiv;
}