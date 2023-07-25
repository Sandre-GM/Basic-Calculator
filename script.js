function add(inputValue) {
    document.getElementById('pantalla').value += inputValue
}

function cleaning() {
    document.getElementById('pantalla').value = ''
}

function calculate() {
    const valueResult = document.getElementById('pantalla').value;
    const result = eval(valueResult);
    document.getElementById('pantalla').value = result
}
