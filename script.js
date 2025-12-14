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

// Operations

function dot(){
    temp_num += '.'
    dotBtn.disabled = true;
}

function add(){
    secondNumInput();
    operation = "+";
}

function minus(){
    secondNumInput();
    operation = "-";
}

function multiply(){
    secondNumInput();
    operation = "*";
}

function divide(){
    secondNumInput();
    operation = "/";
}

// Others

function equals(){
    const ops = {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "*": (x, y) => x * y,
      "/": (x, y) => x / y,
    };
    prev_num = parseFloat(prev_num, 10);
    temp_num = parseFloat(temp_num, 10);
    let result = ops[operation](prev_num, temp_num);
    prev_num = '';
    temp_num = '';
    dotBtn.disabled = false;
}