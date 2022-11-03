// JavaScript Closure

/*
A Closure is a self-invoking function, it then can be set to 
and returns a func expression
*/

let count_up = ( function () {
    let counter = 0; // this is a private variable
    return function() {console.log(counter++)}
})()

count_up();
count_up();
count_up();
count_up();
// console.log(counter)

let addNames = ( () => {
    let names = [];
    console.log('Adding Names');
    return (name) => {
        names.push()
    }
})