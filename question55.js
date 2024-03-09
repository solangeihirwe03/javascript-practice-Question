function isLeapYear(year) {
    if (year % 400 === 0) return true;
  
    return year % 4 === 0 && year % 100 !== 0;
  }
  
  const year1 = 2000;
  const year2 = 2023;
  const year3 = 2024;
  
  console.log(year1, "is a leap year:", isLeapYear(year1)); 
  console.log(year2, "is a leap year:", isLeapYear(year2)); 
  console.log(year3, "is a leap year:", isLeapYear(year3));