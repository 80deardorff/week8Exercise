let myDiv = document.getElementsByClassName('two');
myDiv[0].style.backgroundColor = 'pink';

let newDiv = document.createElement('div');
document.body.appendChild(newDiv);
newDiv.id = 'three';
newDiv.className = 'bg-light';

let myH1 = document.createElement('h1');
myH1.textContent = 'Hello World!';
newDiv.appendChild(myH1);

let newDiv2 = document.createElement('div');
document.body.appendChild(newDiv2)
newDiv2.id = 'four';
newDiv2.className = 'bg-info';

let myNewH1 = document.createElement('h1');
text = document.createTextNode('Hello again World!');
myNewH1.appendChild(text);
newDiv2.appendChild(myNewH1);

let img = document.createElement('img');
let button = document.createElement('button');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CowPosture_20150612.jpg/220px-CowPosture_20150612.jpg';
img.alt = 'A cow.'
button.className = 'button';
button.textContent = 'Click Me!';
button.setAttribute('onclick', 'changeImg()');

document.body.appendChild(img);
document.body.appendChild(button);

function changeImg() {
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/A_white_irish_goat.jpg/220px-A_white_irish_goat.jpg';
  img.alt = 'A goat.';
}
