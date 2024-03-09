function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  const number1 = 10;
  const number2 = 5;
  const operation = "*";
  
  const result = calculate(number1, operation, number2);
  console.log(result);

  function getDayName(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number";
    }
  }
  
  const day = 3;
  
  const dayName = getDayName(day);
  console.log("Day:", dayName);
  function getGrade(score) {
    switch (true) {
      case score >= 90:
        return "A";
      case score >= 80:
        return "B";
      case score >= 70:
        return "C";
      case score >= 60:
        return "D";
      default:
        return "F";
    }
  }

  const studentScore = 85;
  
  const grade = getGrade(studentScore);
  console.log("Grade:", grade);
  function getTrafficLightColor(lightNumber) {
    switch (lightNumber) {
      case 1:
        return "Red";
      case 2:
        return "Yellow";
      case 3:
        return "Green";
      default:
        return "Invalid light number";
    }
  }
  
  const lightInput = 2;
  
  const lightColor = getTrafficLightColor(lightInput);
  console.log("Light Color:", lightColor);
  function getMonthName(monthNumber) {
    switch (monthNumber) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
     case 4:
        return "April";
    case 5:
        return "April";
    case 6:
        return "June";
    case 7:
        return "July";
    case 8:
        return "August";
    case 9:
        return "September";
    case 10:
        return "october";
    case 11:
        return "November";
    case 12:
        return "December";
      default:
        return "Invalid month number";
    }
  }
  
  // Example usage
  const month = 5;
  
  const monthName = getMonthName(month);
  console.log("Month:", monthName);
  

  function menu() {
    const choice = prompt("Enter operation (1 for addition, 2 for subtraction):");
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
  
    switch (choice) {
      case "1":
        console.log(num1, "+", num2, "=", num1 + num2);
        break;
      case "2":
        console.log(num1, "-", num2, "=", num1 - num2);
        break;
      default:
        console.log("Invalid choice");
    }
  }
  
  menu();

  function convertCurrency(amount, source, target) {
    const conversionRates = {
      USD: { EUR: 0.9, GBP: 0.8 },
      EUR: { USD:
      }
    }
}