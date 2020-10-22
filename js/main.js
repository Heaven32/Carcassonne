// const cardEl = document.querySelector('.card');
// const balanceCards =document.querySelector('.balance_cards');
// const gameBoard = document.querySelector('.game-board');

// const count = 10;
// const card = [];

// // Обьект с типом карт
// const cardTypes  = [ 
//     {name: "CardOne", type: 1, adress: `<img src="./image/corner.png" alt="">`},
//     {name: "CardTwo", type: 2, adress: `<img src="./image/impasse.png" alt="">`},
//     {name: "CardThree", type: 3, adress: `<img src="./image/stick.png" alt="">`},
// ];

// // массив со случайным набором чисел
// const arrCard = [];
// const quantityCard = 30;
// for (let i = 0; i < quantityCard; i++) {
//     arrCard.push(cardTypes[Math.floor(Math.random() * Math.floor(3))]);
// }

// // Отрисовка игрового поля
// let fieldsNumb = 8;
// const arr = [];
// const doubleMas = (item) => {
//     for (let i = 0; i < fieldsNumb; i++) {
//         arr[i] = [];
//         for (let j = 0; j < fieldsNumb; j++) {
//             arr[i][j] = null;
//         }
//     }
// }
// doubleMas();

// const createBlock = () => {
//     arr.forEach(i => {
//         i.forEach(x => {
//             gameBoard.innerHTML += `<div class='box'> </div>`  
//             });       
//     }); 
// };
// createBlock();

// // колличество оставшихся карт в колоде
// balanceCards.innerHTML = `Осталось ${arrCard.length} карт`

// // Отрисовка одной карты из всей колоды
// cardEl.innerHTML = arrCard[0].adress;

// // переменная для сохранения угла градуса картинки
// let angle = 0;
// // Клик по игровому полю
// const boxAll = document.querySelectorAll('.box');
// function clickBoardGame () { 
//     if (this.textContent === ' '){
//         this.innerHTML = arrCard[0].adress;
//         arrCard.shift()
//     }else {
//         angle += 90;
//         this.style.transform = `rotate(${angle}deg)`
//     }
//     balanceCards.innerHTML = `Осталось ${arrCard.length} карт`
//     cardEl.innerHTML = arrCard[0].adress;
// };

// const addListeners = () => {
//     boxAll.forEach(elem => elem.addEventListener('click', clickBoardGame))
   
// };
// addListeners();

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