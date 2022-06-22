import loadHome from './loadHome';
import loadMenu from './loadMenu';
// Need to create loadContact

export function init() {
  const content = document.querySelector('.content');
  // Generate header and buttons
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menuBtn');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('contactBtn');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);

  // Generate main block
  const main = document.createElement('div');
  main.classList.add('main');

  // Generate footer block
  const footer = document.createElement('div');
  footer.classList.add('footer');

  content.append(header, main, footer);
  btnListeners();
}

function btnListeners() {
  // Add event listner for each button
  const homeBtn = document.querySelector('.homeBtn');
  homeBtn.addEventListener('click', function () {
    removeMain();
    loadHome();
  });

  const menuBtn = document.querySelector('.menuBtn');
  menuBtn.addEventListener('click', function () {
    removeMain();
    loadMenu();
  });

  // need to create loadBtn
}

export function removeMain() {
  const node = document.querySelector('.main');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  return;
}
