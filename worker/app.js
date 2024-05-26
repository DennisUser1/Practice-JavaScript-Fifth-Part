const worker = new Worker('worker.js');

const changeColorBtn = document.getElementById("changeColorBtn");
const colorBlock = document.getElementById("block");

worker.onmessage = (event) => alert(event.data);

changeColorBtn.addEventListener("click", () => {
    calculate();
    // console.log(worker);
    colorBlock.style.backgroundColor = 
        colorBlock.style.backgroundColor === "black" ? "red" : "black";
});

function calculate() {
    // worker.postMessage('Jerry is a worker, god damn');
    // let sum = 0;
    // for (let i = 0; i <= 1000000; i++) {
    //     sum += i + 15000 * i * 305000;
    // };
    // alert(sum);
    worker.postMessage("");
};