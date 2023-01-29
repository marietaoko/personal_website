// alert('testing');
const myText = document.querySelector('#hello');
myText.textContent = 'Hi! I am Marie';
console.log(myText);
// console.log('Hi! I am Marie');

const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');


// open.onclick = function() {
//   nav.style.height = '30vh';
// };

open.addEventListener('click', function(){
  nav.style.height = '20vh';
});

// close.onclick = function(){
//   nav.style.height = '0';
// };
close.addEventListener('click', function(){
  nav.style.height = '0';
});


let message = 'some new message';
console.log(message);
message = 'My name is Marie Skywalker, and I come from a galaxy far far away';


const myBtn = document.querySelector('#change');
// let's add an event to the btn
myBtn.onclick = function () {
  myText.textContent = message;
};

// move.addEventListener('click', function(){
//     myText.textContent = message;
//   });

// move.addEventListener('click', () => {
//     myText.textContent = message;
//   });



