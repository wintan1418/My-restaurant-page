export default function menuPage() {
  const menuDiv = document.createElement('DIV');
  menuDiv.className = 'pages menu-page';
  const html = ` 
        <div class = "menu-items">
            <div class = "menu-item">
                <img src = "./src/assets/jollof-rice.png"></img>
                <div class = "item-details">
                    <p class="item-name">Jollof rice</p>
                    <p class="item-price">10$</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./src/assets/naija1-oka.png"></img>
                <div class = "item-details">
                    <p class="item-name">Oka soup</p>
                    <p class="item-price">15$</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./src/assets/naija2.offals-pepper-soup.png"></img>
                <div class = "item-details">
                    <p class="item-name">Pepper soup</p>
                    <p class="item-price">10$</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./src/assets/naija3-egusi.png"></img>
                <div class = "item-details">
                    <p class="item-name">Egusi</p>
                    <p class="item-price">10$</p>
                </div>
            </div>
        </div>
        <p class="add-ons">With Soft Drink add 5$</p>
    `;
  menuDiv.insertAdjacentHTML('beforeend', html);

  return menuDiv;
}
