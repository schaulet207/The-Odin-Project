const container = document.querySelector('#container');

const content = document.createElement('div');
content.style.background = 'pink';
content.style.border = '1px solid black';
content.classList.add('content');
const content2 = document.createElement('h1');
content2.textContent = "I'm in a div!";
content.appendChild(content2);
const content3 = document.createElement('p');
content3.textContent = "Me too!";
content2.appendChild(content3);

container.appendChild(content);