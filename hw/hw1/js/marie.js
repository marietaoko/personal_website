const marie = document.querySelector('#marie');
const france = document.querySelector('#france');
const plain = document.querySelector('#plain');
const dart = document.querySelector('#dart')

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

window.addEventListener("scroll", () => {
let offset = window.scrollY;
console.log(offset);
marie.style.bottom = offset * 1.4 + 'px';
france.style.bottom = offset * 0.3 + 'px';
plain.style.transform = `translateX(-${offset * 0.4}px)`;

// astronaut.style.transform =  "rotate(" + offset * 0.2 + "deg)";
//astronaut.style.transform = 'translateY(' + '-' + offset * 0.5 + 'px)';
//astronaut.style.transform = `translate(${offset * 0.2}px, -${offset * 0.5}px) rotate(${offset * 0.02}deg)`;
// astronaut.style.transform = `translateY(-${offset * 0.5}px) rotate(${offset * 0.02}deg)`;
// higher % scrolls faster
 });

 dart.addEventListener('click', function(){
    // this.classList.add('change');
      this.classList.toggle('change');
  });