 
 function bmiCalc(weight, height){
    let bmi = weight / (height * height);

    if(bmi < 18){
        return 'you have ' + bmi + ' you are underweight';
    }
    else if(bmi >= 18 && bmi <= 24){
        return 'you have ' + bmi + ' you are normal weight';
    }
    else if(bmi > 24 ){
        return 'you have ' + bmi + ' you are obese';
    }
 }

 console.log(bmiCalc(49, 1.70));