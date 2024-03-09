
function ageCalssification(age){
    if(age === 0 && age <= 12){
        return 'MIMICRY';

    }
    else if(age > 12 && age <= 19){
        return 'SELF DISCOVERY';

    }
    else if(age > 19 && age <= 45){
        return 'COMMITMENT';

    }
    else if(age > 45){
        return 'LEGACY';
    }
    else{
        return 'INVALID INPUT!'
    }
}
console.log(ageCalssification(21));