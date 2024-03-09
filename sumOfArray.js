  
 function sumOfArr(arr){
    let sum = 0;

    for(let i = 0; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
 }

 let numbers = [1, 3, 4, 5, 7, 8, 9];

 const total = sumOfArr(numbers);
 console.log(total);
 