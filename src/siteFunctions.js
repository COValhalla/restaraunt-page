export function init() {
  const content = document.querySelector('.content');
  // Generate header and buttons
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);

  // Generate main block
  const main = document.createElement('div');
  main.classList.add('main');

  // Generate footer block
  const footer = document.createElement('div');
  footer.classList.add('footer');

  content.append(header, main, footer);
}

export function removeMain() {
  const node = document.querySelector('.main');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  return;
}
