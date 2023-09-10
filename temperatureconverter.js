document.getElementById('convertbutton').addEventListener('click', () => {
const numbertemp = parseFloat(document.getElementById('val').value);
    
    const inputunit = document.getElementById('inputunit').value;
    const outputunit = document.getElementById('outputunit').value;
   const convertedtemperature = convertTemperature(numbertemp, inputunit, outputunit);
   document.getElementById('result').textContent = `${numbertemp} ${inputunit} is ${convertedtemperature.toFixed(2)} ${outputunit}`;
});
function convertTemperature(value, inputUnit, outputUnit){
if (inputUnit === outputUnit) {
   return value;
 }

 if (inputUnit === 'Celsius') {
   if (outputUnit === 'Fahrenheit') {
     return (value * 9/5) + 32;
   } else if (outputUnit === 'Kelvin') {
     return value + 273.15;
   }
 } else if (inputUnit === 'Fahrenheit') {
   if (outputUnit === 'Celsius') {
     return (value - 32) * 5/9;
   } else if (outputUnit === 'Kelvin') {
     return (value - 32) * 5/9 + 273.15;
   }
 } else if (inputUnit === 'Kelo') {
   if (outputUnit === 'Celsius') {
     return value - 273.15;
   } else if (outputUnit === 'Fahrenheit') {
     return (value - 273.15) * 9/5 + 32;
   }
 }

 return NaN; // Invalid conversion
}