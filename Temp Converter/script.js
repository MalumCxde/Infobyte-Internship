function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number!";
        return;
    }

    if (unit === "celsius") {
        var convertedTemperature = (temperature * 9/5) + 32;
        result.textContent = convertedTemperature.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
        var convertedTemperature = (temperature - 32) * 5/9;
        result.textContent = convertedTemperature.toFixed(2) + " °C";
    } 
    
    else if (unit === "kelvin") {
        var convertedTemperature = temperature + 273.15;
        result.textContent = convertedTemperature.toFixed(2) + " K";
    }
    
}