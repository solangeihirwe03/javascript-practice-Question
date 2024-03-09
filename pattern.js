
function printAsteriskPattern(rows) {

  for (let i = 0; i < rows; i++) {

    let asteriskString = "";

    for (let j = 0; j < rows; j++) {
      asteriskString += "* ";
    }

    asteriskString = asteriskString.trim();

    console.log(asteriskString);
  }
}

const numRows = 5;
printAsteriskPattern(numRows);