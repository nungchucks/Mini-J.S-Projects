let reverseString = (string) => {
    return string.split("").reverse().join("")
}

let reverseString2 = (string) => {
    var newStr = ""; 
    for (let i = string.length-1; i >=0; i--) {
        newStr += string[i]
    }
    return newStr; 
}

let removefromArray = (array, itemToRemove) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == itemToRemove) {
            array.splice(i,1)
        }
    }
    return array; 
}

let sumAll = (a, b) => {
    let sum = 0; 
    for (let a = 0; a <= b; a++) {
        sum+=a;
    }
    return sum; 
}

let leapYears = (year) => {
    let leapyear = false; 
    if (year%4 == 0 && year%400 == 0) {
        leapyear = true; 
    }
    return leapyear; 
}

let ftoC = (temperature) => {
    return parseFloat((temperature -32) * 5/9).toFixed(1) 
}

let ctoF = (temperature) => {
    return parseFloat((temperature & 5/9) + 32).toFixed(1) 
}

console.log(ftoC(100));