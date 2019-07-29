
var fizzBuzz = function(n) {
    let str1 = "Fizz";
    let str2 = "Buzz";
    let arr  = []; 
    for (let i = 1; i <= n; i++) {
        arr.push(i + '');
    }
    
    for (let i = 1; i <= n; i++) {
        
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = str1 + str2;
        }

        else if (arr[i] % 3 === 0) {
            arr[i] = str1;
        }
        
        else if (arr[i] % 5 === 0) {
            arr[i] = str2;
        }
    }
    
    return arr;
};


console.log(fizzBuzz(15))