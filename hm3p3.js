$(".tooltip").tooltip();

$(document).ready(function() {
    $("#temp_conversion").validate({
        rules:
            {
                temperature: {required: true, number: true},
            }
    });
})

function calFahrenheit() {
    if ($("#temp_conversion").valid()) {
        let celsius, fahrenheit;

        celsius = document.getElementById("temperature").value;
        fahrenheit = (9/5 * celsius) + 32;
        document.getElementById("results").value = parseInt(fahrenheit) + " degrees Fahrenheit";
    }
}

function calCelsius() {
    if ($("#temp_conversion").valid()) {
        let celsius, fahrenheit;

        fahrenheit = document.getElementById("temperature").value;
        celsius = 5/9 * (fahrenheit - 32);
        document.getElementById("results").value = parseInt(celsius) + " degrees Celsius";
    }
}
