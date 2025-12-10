let temp_num = '';
let prev_num = '';
let operation = '';
let dotBtn = document.querySelector("#dot-btn");

document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener('click', () => {
        temp_num += btn.textContent;
        console.log(temp_num);
    })
})

dotBtn.addEventListener('click', () => {
    temp_num += '.'
    dotBtn.disabled = true;
})

function secondNumInput(){
    prev_num = parseFloat(temp_num, 10);
    temp_num = '';
    dotBtn.disabled = false;
}

function add(){
    secondNumInput();
    operation = "+";
}

function equals(){
    prev_num = parseFloat(prev_num, 10);
    temp_num = parseFloat(temp_num, 10);
    console.log(prev_num + temp_num);
    prev_num = '';
    temp_num = '';
    dotBtn.disabled = false;
}