document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const addButton = document.querySelector('button');
    const resultDiv = document.querySelector('.bg-indigo-50 div');

    addButton.addEventListener('click', function() {
        // Validate inputs
        if (!number1Input.value || !number2Input.value) {
            resultDiv.textContent = 'Please enter both numbers';
            return;
        }

        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        
        // Check if conversion was successful
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }
        
        const sum = num1 + num2;
        resultDiv.textContent = sum;
    });
});