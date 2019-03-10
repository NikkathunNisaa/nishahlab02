var things = ['cats','car','beach','book','couch'];
var answer = prompt('What is one of my favourite things?');
var flag;

for (var i=0; i<things.length; i++){
    console.log('Current iteration:', things[i]);

    if (answer === things[i]){
        alert('You got it right!!');
        flag = true;
        break;
    }
}

if(!flag){
    alert('Incorrect guess - Try again');
}