const sum = document.querySelector('#sum');
const procent = document.querySelector('#procent');
const result = document.querySelector('#result');
const button = document.querySelector('#button');
const clear = document.querySelector('#clear');

console.log(button)
function sumResult() {
    // формула п = с * п / 100 
    if(!sum.value || !procent.value){
        result.placeholder = 'нет входных данных'
        return;    
    } 
    const output = Number(sum.value) * Number(procent.value) / 100;
    result.value = Math.floor(output)
}

clear.addEventListener('click', function(){
    location.reload()
    sum.value = '';
    result.value = '';
    procent.value = '';
})

button.addEventListener('click', sumResult)
