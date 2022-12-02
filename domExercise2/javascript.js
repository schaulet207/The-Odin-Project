const container = document.querySelector('#container');

const content = document.createElement('h3');
content.classList.add('content');
content.style.color = 'blue';
content.textContent = "I'm a blue H3!";

container.appendChild(content);