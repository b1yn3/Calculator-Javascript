let temp_num = '';
let prev_num = '';
let operation = '';
let dotBtn = document.querySelector("#dot-btn");

const prevNumDisplay = document.querySelector("#prev-num-inp");
const currNumDisplay = document.querySelector("#current-num-inp");

document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener('click', () => {
        temp_num += btn.textContent;
        updateDisplay();
    })
})

document.addEventListener('keydown', (event) => {
    if(event.key >= '0' && event.key <= '9'){
        temp_num += event.key;
        updateDisplay();
    }
})

dotBtn.addEventListener('click', () => {
    temp_num += '.'
    dotBtn.disabled = true;
    updateDisplay();
})

function secondNumInput(){
    prev_num = parseFloat(temp_num, 10);
    temp_num = '';
    dotBtn.disabled = false;
}

// Update

function updateDisplay(){
    currNumDisplay.textContent = temp_num || '0';
    prevNumDisplay.textContent = prev_num ? `${prev_num} ${operation}` : '';
}


// Operations

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

function clearDisplay(){
    prev_num = ''.toString();
    temp_num = ''.toString();
    dotBtn.disabled = false;
    prevNumDisplay.textContent = '';
    currNumDisplay.textContent = '0';

}

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
    prevNumDisplay.textContent = '';
    currNumDisplay.textContent = result;

    prev_num = '';
    temp_num = '';
    dotBtn.disabled = false;
}