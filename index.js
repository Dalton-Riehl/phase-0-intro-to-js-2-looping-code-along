function writeCards(array, event) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(integer) {
    let number = integer;
    while (number >= 0) {
        console.log(number);
        number--;
    }
}