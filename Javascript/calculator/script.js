// Normal Calculator Logic
let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function sqrt() {
    try {
        displayValue = Math.sqrt(eval(displayValue)).toString();
    } catch {
        displayValue = 'Error';
    }
    document.getElementById('display').value = displayValue;
}


function calculatepercentage() {
    try {
        // Evaluate the current display value up to the last operator
        let lastOperatorIndex = Math.max(displayValue.lastIndexOf('+'), displayValue.lastIndexOf('-'), displayValue.lastIndexOf('*'), displayValue.lastIndexOf('/'));
        if (lastOperatorIndex === -1) {
            // If no operator is found, just divide the number by 100
            displayValue = (parseFloat(displayValue) / 100).toString();
        } else {
            // Extract the base value and the percentage value
            let baseValue = parseFloat(displayValue.slice(0, lastOperatorIndex));
            let percentageValue = parseFloat(displayValue.slice(lastOperatorIndex + 1));
            let operator = displayValue[lastOperatorIndex];
            
            // Calculate the percentage of the base value
            let result;
            switch (operator) {
                case '+':
                    result = baseValue + (baseValue * (percentageValue / 100));
                    break;
                case '-':
                    result = baseValue - (baseValue * (percentageValue / 100));
                    break;
                case '*':
                    result = baseValue * (percentageValue / 100);
                    break;
                case '/':
                    result = baseValue / (percentageValue / 100);
                    break;
                default:
                    result = baseValue;
                    break;
            }
            displayValue = result.toString();
        }
    } catch {
        displayValue = 'Error';
    }
    document.getElementById('display').value = displayValue;
}




function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    document.getElementById('display').value = displayValue;
}

// Currency Converter Logic
const currencyRates = {
    'USD': { 'EUR': 0.85, 'INR': 74.93, 'AED': 3.67 },
    'EUR': { 'USD': 1.18, 'INR': 88.46, 'AED': 4.34 },
    'INR': { 'USD': 0.013, 'EUR': 0.011, 'AED': 0.049 },
    'AED': { 'USD': 0.27, 'EUR': 0.23, 'INR': 20.27 }
};

function convertCurrency() {
    const amount = document.getElementById('currencyAmount').value;
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
    const rate = currencyRates[from][to] || 1;
    const result = amount * rate;
    document.getElementById('currencyResult').innerText = `Converted Amount: ${result.toFixed(2)} ${to}`;
}

// Temperature Converter Logic
function convertTemperature() {
    const temp = document.getElementById('temperatureInput').value;
    const scale = document.getElementById('temperatureScale').value;
    let result;
    if (scale === 'C') {
        result = (temp - 32) * (5 / 9);
    } else {
        result = (temp * (9 / 5)) + 32;
    }
    document.getElementById('temperatureResult').innerText = `Converted Temperature: ${result.toFixed(2)} °${scale}`;
}

// Weight Converter Logic
function convertWeight() {
    const weight = document.getElementById('weightInput').value;
    const from = document.getElementById('weightFrom').value;
    const to = document.getElementById('weightTo').value;
    let result;
    if (from === 'kg' && to === 'lb') {
        result = weight * 2.20462;
    } else if (from === 'lb' && to === 'kg') {
        result = weight / 2.20462;
    } else {
        result = weight;
    }
    document.getElementById('weightResult').innerText = `Converted Weight: ${result.toFixed(2)} ${to}`;
}

// Percentage Calculator Logic

function calculatePercentage() {
    const value = document.getElementById('percentageValue').value;
    const rate = document.getElementById('percentageRate').value;
    let result = (value * rate) / 100;
    document.getElementById('percentageResult').innerText = `Result: ${result}`;
}




// Age Calculator Logic
function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let day =now.getDay() - birthDate.getDay();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('ageResult').innerHTML = `
        <p>Years: ${years}</p>
        <p>Months: ${months}</p>
        <p>Days: ${days}</p>
        <p>Day: ${day}</p>
    `;
}

// Show and Hide Calculator Logic
function showCalculator(calculatorId) {
    document.querySelectorAll('.calculator-container').forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(calculatorId).classList.add('active');
}
