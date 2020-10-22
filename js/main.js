const mainEl = document.querySelector('.main');
const barEl = document.querySelector('.bar');
const itemEl = document.querySelector('.item');

const borderFunc = (el1, time1, el2, time2, el3, time3) => {
    setTimeout(() => {
        el1.classList.add('border');
            setTimeout(() => {
                el2.classList.add('border');
                setTimeout(() => {
                    el3.classList.add('border');
                }, time3);
            }, time2);  
    }, time1);
};

setTimeout(() => {
    mainEl.classList.remove('border');
}, 4000)

borderFunc(mainEl, 3000, barEl, 2000, itemEl, 1000);
//borderFunc(barEl, 2000);
//borderFunc(itemEl, 1000);