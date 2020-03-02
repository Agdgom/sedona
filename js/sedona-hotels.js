/*Sedona Hotels*/
let minCost = document.querySelector("#min-cost");
console.log(minCost);
function replacer(el) {
    el.value = el.value.replace(/[^0-9+]/g, ''); 
}