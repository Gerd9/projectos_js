const colors = [
    "green",
    "red",
    "rgb(182, 187, 37)",
    "rgb(133, 122, 200)",
    "#f1525",
    "rgb(153, 175, 224)",
    "rgb(224, 163, 101)"
]

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //get random number between 0 - 3  
    const randoNumber = getRandomNumber();
    console.log(randoNumber)
    document.body.style.backgroundColor = colors[randoNumber];
    color.textContent = colors[randoNumber];
})

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
