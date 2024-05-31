// script.js
const exchangeRates = {
    "USD": {
        "USD": 1,
        "EUR": 0.84,
        "JPY": 110,
        "DOP": 59,
        "PMX": 24,
        "REA": 10,
    },
    "EUR": {
        "USD": 1.19,
        "EUR": 1,
        "JPY": 130.2,
        "DOP": 65,
        "PMX": 30,
        "REA": 13,
    },
    "JPY": {
        "USD": 0.0091,
        "EUR": 0.0077,
        "JPY": 1,
        "DOP": 0.38,
        "PMX": 0.11,
        "REA": 0.033

    },
    "DOP": {
        "USD": 0.017,
        "EUR": 0.016,
        "JPY": 2.66,
        "PMX": 0.28,
        "DOP": 1,
        "REA": 0.087,
    },
    "PMX": {
        "USD": 0.060,
        "EUR": 0.054,
        "JPY": 9.40,
        "PMX": 1,
        "DOP": 3.53,
        "REA": 0.31,

    },
    "REA": {
        "USD": 0.19,
        "EUR": 0.18,
        "JPY": 30.50,
        "REA": 1,
        "DOP": 11.45,
        "PMX": 3.25,
    }
};

function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
