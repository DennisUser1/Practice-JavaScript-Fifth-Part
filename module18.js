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
