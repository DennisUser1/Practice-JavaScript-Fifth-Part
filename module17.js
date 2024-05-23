// Який метод дає змогу запланувати одноразовий виклик функції? setTimeout(callback, delay)
// Який метод дозволяє викликати функцію регулярно, повторюючи виклик через певний проміжок часу? setInterval(callback, delay)
// Що повертають методи setTimeout() та setInteval()? Числовий ідентифікатор створеного таймера
// Який метод зупиняє інтервал? clearInterval(id)
// Методи setTimeout() та setInteval() це частина стандартної бібліотеки JavaScript? Ні
// У якій послідовності буде виведено логи? B > D > C > A
// setTimeout(() => console.log("A"), 2000);
// console.log("B");
// setTimeout(() => console.log("C"), 1500);
// console.log("D");
// Що буде виведено у консоль? A > C > B
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// Скільки разів у консоль виведеться рядок "Tick"? 2
// const timerId = setInterval(() => {
//     console.log("Tick");
// }, 2000);

// setTimeout(() => {
//     clearInterval(timerId);
// }, 5000);
// Що буде виведено у консоль? 1 > 2 > 3
// for (let i=3; i > 0; i--) {
//     const delay = i * 1000;
//     setTimeout(() => console.log(i), delay);
// } 
// Багатопоточність і асинхроність - це те саме? Ні
// Що зберігають екземпляри класу Date? Дату і час
// const date = new Date();
// З такого виклику класу Date буде створено дату "1 січня 1970 року"? Ні
// const date = new Date();
// console.log(date);
// Що повертає метод Date.now()? Кількість мілісекунд х півночі 1 січня 1970 року
// const now = Date.now();
// console.log(now);
// Що повертає метод getDate()? День місяця, від 1 до 31
// const date = new Date();
// console.log(date.getDate());
// Що буде виведено у консоль? 7
// const date = new Date("2030-08-23");
// console.log(date.getMonth()); 
// Що буде результатом вираження віднімання двох дат? Число
// const start = new Date("2030-04-23");
// const end = new Date("2030-05-17");
// console.log(end - start);

import refs from './refs17.js'; 

// const NEW_YEAR = new Date("01.01.2025 00:00");

// const handleTime = () => {
//     const now = new Date();
//     const timeDifference = NEW_YEAR - now;

//     // 1 day = 86 400 000 milliseconds
//     // 1 hour = 3 600 000 milliseconds
//     // 1 minute = 60 000 milliseconds 
//     // 1s = 1000ms
//     const daysLeft = Math.floor(timeDifference / 86400000);
//     const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000);
//     const minutesLeft = Math.floor((timeDifference % 3600000) / 60000);
//     const secondsLeft = Math.floor((timeDifference % 60000) / 1000);

// //  const timeLeftValue = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
// //  functionalTimerEl.textContent = timeLeftValue;

//     attachToElement(refs.functionalTimerEl, {
//         daysLeft, 
//         hoursLeft, 
//         minutesLeft, 
//         secondsLeft,
//     });
// };

// const attachToElement = (el, {
//     daysLeft, 
//     hoursLeft, 
//     minutesLeft, 
//     secondsLeft,
// }) => {
//     const timeLeftValue = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
//     el.textContent = timeLeftValue;
// }

// let timer = setInterval(handleTime, 1000);

// refs.stopTimerEl.addEventListener("click", () => {
//     clearInterval(timer);
// });

// refs.startTimerEl.addEventListener("click", () => {
//     timer = setInterval(handleTime, 1000);
// });

class Timer {
    #timer;
    static NEW_YEAR_PROP = new Date("01.01.2025 00:00");
   
    constructor(element, reloadTime) {
        this.element = element;
        this.reloadTime = reloadTime;
    }

    create(){
        this.#timer = setInterval(() => {}, this.reloadTime);
    }

    attachTimer () {
        const timeLeftValue = this.#calculateDate();
        this.element.textContent = timeLeftValue;
    }

    start() {
        this.stop();
        this.create();
    }
    stop() {
        clearInterval(this.#timer);
    }

    // Приватні методи в кінці
    #calculateDate() {
        const now = new Date();
        const timeDifference = NEW_YEAR - now;

        const daysLeft = Math.floor(timeDifference / 86400000);
        const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000);
        const minutesLeft = Math.floor((timeDifference % 3600000) / 60000);
        const secondsLeft = Math.floor((timeDifference % 60000) / 1000);
        
        return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }
}

const timer = new Timer(classTitle, 1000);
timer.start();