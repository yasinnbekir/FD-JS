function specialNumbers(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        let currDigit = Number(i);

        sum += currDigit 
        sum = sum  / 10
        if(sum % 10 === 0){
            console.log(`${currDigit} -> True`)
        }else{
            console.log(`${currDigit} -> False`)

        }

    }
    


    



}
specialNumbers(20)