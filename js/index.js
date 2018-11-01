const link = document.querySelector('a');
link.textContent = 'MDN';
link.href = 'http:\\google.com';

//if (Math.random()<0.33){ 

const para = document.createElement('p');
para.textContent = 'Best something!';
const sec = document.querySelector('section');
sec.appendChild(para);
para.classList.add('highlite');

const img = document.querySelector('img');
sec.appendChild(img);

const h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);

$('-.hide-pars').click(hidePars);
function hidePars (){
    $('p').hide();
}


