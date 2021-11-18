const carInfoBtns = document.querySelectorAll('.car-info-btn');
const carInfoTexts = document.querySelectorAll('.car-info-text');


for (let i = 0; i < carInfoBtns.length; i++) {
    carInfoBtns[i].addEventListener('click', ()=> {
        showCarInfo(i);
    });
    
}

function showCarInfo(i) {
    carInfoTexts[i].classList.toggle('block');
    carInfoTexts[i].classList.toggle('hidden');
    carInfoTexts[i].classList.toggle('opacity-100');
    carInfoTexts[i].classList.toggle('opacity-0');
    carInfoBtns[i].classList.toggle('bg-blue-600');
    if(carInfoBtns[i].innerHTML == 'Show info') {
        carInfoBtns[i].innerHTML = 'Hide info'
    }
    else {
        carInfoBtns[i].innerHTML = 'Show info'
    }
    
    console.log('toggle');
}