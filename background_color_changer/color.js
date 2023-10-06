var red = document.querySelector("#red");
var green = document.querySelector("#green");
var yellow = document.querySelector("#yellow");
var blue = document.querySelector("#blue");
var body = document.body

red.addEventListener("click", () => body.style.backgroundColor = "red");
green.addEventListener("click", () => body.style.backgroundColor = "green");
yellow.addEventListener("click", () => body.style.backgroundColor = "yellow");
blue.addEventListener("click", () => body.style.backgroundColor = "blue");