function sumOfOddNumbers(n){

    iteration = 0
    buff = 0

    for(let i = 1; i <= 100; i+=2){
        
        buff += i 
         iteration++
        console.log(i)
        if(iteration >= n){
            break;
            
        }
        

        }
        console.log( `Sum: ${buff}`)

    
}
sumOfOddNumbers(3)