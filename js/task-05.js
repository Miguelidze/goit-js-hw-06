const input = document.querySelector("#name-input")
let output = document.querySelector("#name-output")
console.log(input);
console.log(output);
input.addEventListener("input", onInputChange);
function onInputChange(event) {
    if (event.target.value === '') {
        output.textContent = "Anonymous"
    }
    else {
        output.textContent = event.currentTarget.value;
    }
    }