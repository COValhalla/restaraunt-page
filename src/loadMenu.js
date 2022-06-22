export default function loadMenu() {
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

  // Generate sub block 'about'
  const main__about = document.createElement('div');
  main__about.classList.add('main__about');
  const main__about__text = document.createElement('div');
  main__about__text.classList.add('main__about__text');
  main__about__text.textContent = 'This is a menu! Prices and items and such!';
  main__about.append(main__about__text);

  // Generate sub block 'hours'
  const main__hours = document.createElement('div');
  main__hours.classList.add('main__hours');
  const main__hours__title = document.createElement('div');
  main__hours__title.classList.add('main__hours__title');
  main__hours__title.textContent = 'Menu';

  main__hours.append(main__hours__title);

  main.append(main__about, main__hours);

  // Generate footer block

  content.append(header, main);

  console.log('loadMenu is working!');
}
