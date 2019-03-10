var number;
var counter=1;

while (number !== 16){
    number = parseInt(prompt('Guess my favorite number'));

    if(number<16){
        alert('Sorry you guess too low');
        counter++;
    }
    else if(number>16){
        alert('Sorry you guess too high');
        counter++;
    }
    else if(isNaN(number) || number === null){
        alert('Please enter a valid number');
        counter++;
    }
}

console.log('Total guesses until I got it:', counter);