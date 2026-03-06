
let num;

function numberType(num){
    
    if (num>0) {
        return ("The given number is positive ");
    }
    else if (num<0) {
        return ("The given number is negative ");
    }
    else
        return ("The given number is neutral ");
}

console.log(numberType(10));
console.log(numberType(-10));
console.log(numberType(0));