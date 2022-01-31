'use strict';
const box = document.querySelector('.box'),
      btn = document.querySelector('button');
/*
const width = box.clientWidth;
const height = box.clientHeight;
*/
/*const width = box.offsetWidth;
const height = box.offsetHeight;*/
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);
//при клике откр полностью окно прокрутки
btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';// инлайн стиль
    console.log(box.scrollTop);//сколько прошли от верха
});
//получ координат страницы
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);//50
//опред стилей, кот есть у элемента
const style = window.getComputedStyle(box);//стиль css
console.log(style);
console.log(style.display);//block
//получ стилей псевдо эл
// window.getComputedStyle(box);

//получ колич "рх" отлист user
// console.log(document.documentElement.clientWidth);//1600
console.log(document.documentElement.scrollTop);//0- не пролистано
window.scrollBy(0, 400);//скрол на 400 рх в низ от текущ позиции
window.scrollTo(0, 400);// скрол на 400 рх в низ от top page


