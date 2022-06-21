export default function loadHome() {
  const content = document.querySelector('.content');

  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);

  content.appendChild(header);

  console.log('loadHome is working!');
}
