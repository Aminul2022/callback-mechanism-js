
// calling multiple parameters in a callback mechanism
sum(displayConsole, 10, 15);

// calling multiple parameters in a callback mechanism
sum(displayDom, 20, 25);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(`Result is: ${result}`);
}

function displayDom(result) {
    document.getElementById("h1Display").textContent = `The result is: ${result}`;

}