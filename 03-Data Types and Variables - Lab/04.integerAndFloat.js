function integerAndFloat(num1, num2 , num3){

    let sum = num1 + num2 + num3 ; 
    
    if(sum % 1 === 0){
        sum += " - Integer"
        console.log(sum);
    }else{
        sum += " - Float"
        console.log(sum);
    }




}

integerAndFloat(9, 100, 1.1)