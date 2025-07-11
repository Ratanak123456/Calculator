
function sum () {

    let a = parseInt(document.getElementById('number1').value);
    let b = parseInt(document.getElementById('number2').value);

    let result = a + b
    document.getElementById('result').textContent = result; 
}