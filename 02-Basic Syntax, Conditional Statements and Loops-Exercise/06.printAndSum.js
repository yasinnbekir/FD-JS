function printAndSum(start, end) {

   let  buff = 0;
   let numberStr = "";
    

    for (let i = start; i <= end; i++) {
        buff += i
        numberStr += i + " "
    }
    console.log(numberStr)
    console.log(`Sum: ${buff}`)

}
printAndSum(5, 10)