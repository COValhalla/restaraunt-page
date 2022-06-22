export function prepareDOM() {
  const node = document.querySelector('.content');
  if (node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  } else {
    const node = document.querySelector('body');
    const content = document.createElement('div');
    content.classList.add('content');
    node.append(content);
  }
}
