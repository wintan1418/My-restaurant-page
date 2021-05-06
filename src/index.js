function html() {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  document.getElementsByTagName('head')[0].appendChild(link);
}

const content = document.querySelector('.content');
content.appendChild(initPage());

const mainContent = document.querySelector('.content');
mainContent.append(homePage());
mainContent.append(aboutPage());
mainContent.append(contactPage());
mainContent.append(html());

const nav = new Navigation();
const pages = document.querySelectorAll('.pages');
for (let i = 1; i < pages.length; i) {
  pages[i].classList.add('hide');
}

const hidePages = () => {
  for (let i = 0; i < pages.length; i) {
    pages[i].classList.add('hide');
  }
};
