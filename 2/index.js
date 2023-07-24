const firstName = document.querySelector('#firstname'),
    secondName = document.querySelector('#secondname'),
    button = document.querySelector('#button'),
    reset = document.querySelector('#reload'); 

reset.addEventListener('click', function(){
    location.reload();
})

function RandomNumber() {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    firstName.value = "";
    secondName.value = "";
    button.setAttribute("disabled", "");
}

button.addEventListener('click', RandomNumber);




