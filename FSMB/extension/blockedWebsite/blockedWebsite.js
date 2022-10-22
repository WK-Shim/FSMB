const button = document.getElementById("reportButton");

console.log(button);

button.addEventListener('click', function() {
    window.open("url", "_self");
});