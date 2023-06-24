const circle = document.getElementById("circle");
const redButton = document.getElementById("redbut");
const blueButton = document.getElementById("bluebut");
const greenButton = document.getElementById("greenbut");
const reset = document.getElementById("resetbut");
 
redButton.addEventListener('click', function(){
    circle.style.backgroundColor = 'red';
});
 
blueButton.addEventListener('click', function(){
    circle.style.backgroundColor = 'blue';
});
 
greenButton.addEventListener('click', function(){
    circle.style.backgroundColor = 'green';
});
 
reset.addEventListener('click', function(){
    circle.style.backgroundColor = 'transparent';
});