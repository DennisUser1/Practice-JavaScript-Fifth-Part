// Проміси
// Що таке проміс (Promise)? Об'єкт, що представляє результат асинхроної операції
// Які стани має проміс? Pending, Fulfilled, Rejected 
// Чи є у проміса стан settled? False
// Виберіть початковий стан промісу? Pending
// Коли кажуть, що проміс здійснився (settled), то які стани мають на увазі? Fulfilled та Rejected
// Які параметри отримує колбек-функція executor? resolve та reject
// const executor = () => {
//     //...
// };
// const promise = new Promise(executor);
// Який метод промісу дозволяє обробити результат його успішного завершення? then()
// Що повертає метод then()? Проміс
// У якій послідовності буде виведено логи? A > C > B
// console.log("A"); 

// const promise = new Promise(resolve => {
//     resolve("B")
// });
// promise.then(value => console.log(value));
// console.log("C");
// У якій послідовності буде виведено логи? A > D > C > B
// console.log("A");
// setTimeout(() => console.log("B"), 0 ); 
// const promise = new Promise(resolve => {
//     resolve("C")
// });
// promise.then(value => console.log(value));
// console.log("D");
// Який метод промісу дозволяє обробити його завершення з помилкою? catch()
// Який метод промісу дозволяє виконати код незалежно від того, як виконався проміс? finally()
// Що буде виведено у консоль? Помилку
// const promise = new Promise((resolve, reject) => {
//     reject("Whoops");
// });
// promise.then(value => console.log(value));
// Що буде виведено у консоль? undefined
// const promise = new Promise((resolve) => {
//     resolve(10);
// });
// Promise.then(value => {
//     new Promise(resolve => {
//         resolve(value * 2);
//     });
// }).then(value => console.log());

/* 
    1. Implement adding author 
    2. Implement rendering authors 
*/

import api from "./api18.js" 

const addAuthorFormEl = document.getElementById("addAuthorForm");
const authorsNumberEl = document.getElementById("authorsNumber");
const authorsEl = document.getElementById("authors");

const addAuthor = (event) => {
    event.preventDefault();
    const authorName = event.target.authorName.value;

    if (authorName) {
        const delay = Math.random() > 0.5 ? 1500 : 2500;
        api.addAuthor(authorName, delay);
        renderAuthors();
    }
};

const renderAuthors = () => {
    api
        .getAuthors()
        .then((result) => {
            if (Array.isArray(result)) {
                authorsEl.innerHTML = "";
                authorsNumberEl.textContent = `There are ${result.length} authors in the system`;

                result.forEach((item) => {
                    const el = document.createElement("li");
                    el.textContent = item;
                    authorsEl.appendChild(el);
                });
            }
        })
        .catch((err) => (authorsEl.innerHTML = err));
    };

addAuthorFormEl.addEventListener("submit", addAuthor);

const authors = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5 ? true : false;
    const data = [{ name: "Author First", book: "Lifestyle" }];
    setTimeout(() => {
        if (isSuccess) {
            resolve(data);
         } else {
            reject("No data");
         }
    }, 2000);
});
authors
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("This is finally"));

// const promise = new Promise((resolve, reject) => {
//      const isSuccess = true;
//      const data = [];
//      // some code, some processes

//      // send request to the server
//      // get data
//      // process data
//      if (isSuccess) {
//         resolve(data);
//      } else {
//         reject("No data");
//      }
// });
// promise.then(onResolve, onReject).catch().finally();

// function(x, callbackA, callbackB) {
//     if (x) {
//         callbackA(x, callbackC, callbackD)
//     } else {
//         callbackB()
//     }
// }