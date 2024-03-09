function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  const celsiusValue = 25;
  const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
  
  console.log(celsiusValue, "degrees Celsius is equal to", fahrenheitValue, "degrees Fahrenheit.");