const output = document.querySelector('.output');
const button = document.querySelector('#btn');
const body = document.querySelector('body')
const hex_array = [1,2,3,4,5,6];

function hex_code() {
    let res = "";
    for (let i = 0; i < 6; i++) {
        let random_number = Math.floor(Math.random() * hex_array.length)
        res += hex_array[random_number]
    }
    body.style.background = "#" + res;
}

button.addEventListener('click', hex_code);