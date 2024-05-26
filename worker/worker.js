// self. 
onmessage = function(message) {
    // console.log(message);
    let sum = 0;
    for (let i = 0; i <= 1000000; i++) {
        sum += i + 15000 * i * 305000;
    }; 
    postMessage(sum);
};