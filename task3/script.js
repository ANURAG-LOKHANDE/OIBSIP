document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('resultArea');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput.trim() === '') {
        alert('Please enter a valid number for temperature.');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;

    // Conversion logic
    if (unitSelect === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        unit = '°F';
    } else if (unitSelect === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        unit = '°C';
    } else if (unitSelect === 'Kelvin') {
        convertedTemperature = temperature - 273.15; // Kelvin to Celsius
        unit = '°C';
    }

    // Update result area
    if (unitSelect !== 'Kelvin') {
        resultArea.innerHTML = `${convertedTemperature.toFixed(2)} ${unit}`;
    } else {
        const celsius = convertedTemperature;
        const fahrenheit = (celsius * 9/5) + 32;
        resultArea.innerHTML = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    // Animation
    resultArea.classList.remove('hidden');
    resultArea.classList.add('visible');
});
