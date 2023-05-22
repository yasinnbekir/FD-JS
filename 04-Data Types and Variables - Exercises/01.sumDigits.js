function sumDigits(num){
    let numAsString = num.toString()
    let sum = 0;

    for(let i = 0; i < numAsString.length;i++){
        let currDigit = Number(numAsString[i])
        sum += currDigit

    }

console.log(sum)


}


sumDigits(245678)