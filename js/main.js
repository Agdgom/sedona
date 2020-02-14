/* index.html*/
let linkToPage = 'sedona-hotels.html';

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener('click', function(){
    window.open(linkToPage);
});
let amountOfAdultsMinus = document.querySelectorAll('.icon-minus')[0],
    amountOfAdultsPlus = document.querySelectorAll('.icon-plus')[0],
    amountOfAdultsValue = document.querySelector('#amount-of-adults');

let amountOfChildrenMinus = document.querySelectorAll('.icon-minus')[1],
    amountOfChildrenPlus = document.querySelectorAll('.icon-plus')[1],
    amountOfChildrenValue = document.querySelector('#amount-of-children');

amountOfAdultsMinus.addEventListener('click', function(){
    if(amountOfAdultsValue.value !=0){
        amountOfAdultsValue.value = parseInt(amountOfAdultsValue.value) - 1;
    }
});

amountOfAdultsPlus.addEventListener('click', function(){
    amountOfAdultsValue.value = parseInt(amountOfAdultsValue.value) + 1;
});

amountOfChildrenMinus.addEventListener('click', function(){
    if(amountOfChildrenValue.value !=0){
        amountOfChildrenValue.value = parseInt(amountOfChildrenValue.value) - 1;
    }
});

amountOfChildrenPlus.addEventListener('click', function(){
    amountOfChildrenValue.value = parseInt(amountOfChildrenValue.value) + 1;
});