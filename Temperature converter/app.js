// Convert Celsius to Fahrenheit and Kelvin
function convertFromCelsius() {
     const celsius = parseFloat(document.getElementById("celsiusInput").value);
     if (!isNaN(celsius)) {
         document.getElementById("fahrenheitInput").value = (celsius * 9/5 + 32).toFixed(2);
         document.getElementById("kelvinInput").value = (celsius + 273.15).toFixed(2);
     }
 }
 
 // Convert Fahrenheit to Celsius and Kelvin
 function convertFromFahrenheit() {
     const fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
     if (!isNaN(fahrenheit)) {
         document.getElementById("celsiusInput").value = ((fahrenheit - 32) * 5/9).toFixed(2);
         document.getElementById("kelvinInput").value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
     }
 }
 
 // Convert Kelvin to Celsius and Fahrenheit
 function convertFromKelvin() {
     const kelvin = parseFloat(document.getElementById("kelvinInput").value);
     if (!isNaN(kelvin)) {
         document.getElementById("celsiusInput").value = (kelvin - 273.15).toFixed(2);
         document.getElementById("fahrenheitInput").value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
     }
 }
 
 // Clear all input fields
 function clearFields() {
     document.getElementById("celsiusInput").value = "";
     document.getElementById("fahrenheitInput").value = "";
     document.getElementById("kelvinInput").value = "";
 }
 