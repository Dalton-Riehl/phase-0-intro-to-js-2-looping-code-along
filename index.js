// Code your solutions in this file
function countDown(num1) {
    while (num1 >= 0) {
        console.log(num1);
        num1--;
    }
}

function writeCards(recipient, eventName) {
    let newArray = [];
    for (let i = 0; i < recipient.length; i++) {
        let thankYou = `Thank you, ${recipient[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(thankYou);
    }
    return newArray;
}