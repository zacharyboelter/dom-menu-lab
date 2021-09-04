// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];



let aEl = document.createElement('a');

aEl.setAttribute('href', 'link');

aEl.



/////// work above this line
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');


////////////// No idea what to do

// let menuAnch=menuLinks.map(r=>`<li> <a href='${r.href}'>${r.text} </a> </li>`).join("");
// document.getElementById("mylinks").innerHTML=menuAnch;
// console.log(menuAnch);



/////////////  Myabe we can make this work

// var links = menuLinks.map(link => `<a href='${link.href}'>${link.text}</a>`);

// console.log(links);