






let firstdiv = document.getElementById("one");
let firstPara = document.querySelector("#container>.first");

// console.log(firstdiv);
// console.log(firstPara);

let button1 = document.getElementById("add");
let button2 = document.getElementById("remove");
let button3 = document.getElementById("toggle");

button1.addEventListener('click', () => {
    firstPara.classList.add('color');
});

button2.addEventListener('click', () => {
    firstPara.classList.remove('color');
});


button3.addEventListener('click', () => {
    firstPara.classList.toggle('color');
});

























// let one = document.getElementById("one");
// let firstPara = document.querySelector("#container>.first");


// let button1 = document.getElementById("add");
// let button2 = document.getElementById("remove");
// let button3 = document.getElementById("toggle");



// button1.addEventListener('click', () => {
//     firstPara.classList.add('color');
// });

// button2.addEventListener('click', () => {
//     firstPara.classList.remove('color');
// });

// button3.addEventListener('click', () => {
//     firstPara.classList.toggle('color');
// })