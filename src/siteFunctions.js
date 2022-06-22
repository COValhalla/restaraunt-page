import loadHome from './loadHome';
import loadMenu from './loadMenu';

export function init() {
  createHeader();
  createMain();
  createFooter();
  btnListeners();
  loadHome();
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

  header.append(homeBtn, menuBtn);
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

function removeMain() {
  const node = document.querySelector('.main');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  return;
}
