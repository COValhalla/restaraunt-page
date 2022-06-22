import loadHome from './loadHome';
import loadMenu from './loadMenu';
// Need to create loadContact

// Creates standard DOM elements header, main, footer and adds listeners to buttons
export function init() {
  createHeader();
  createMain();
  createFooter();
  btnListeners();
}

function createHeader() {
  const content = document.querySelector('.content');
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
  content.append(header);
}

function createMain() {
  const content = document.querySelector('.content');
  const main = document.createElement('div');
  main.classList.add('main');
  content.append(main);
}

function createFooter() {
  const content = document.querySelector('.content');
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.append(footer);
}

function btnListeners() {
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
