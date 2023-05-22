function gladiatorExpenses(
    fightsLost,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice){
        let expenses = 0;
         

        for(let figths = 1; figths <= fightsLost; figths++){
            if(figths % 2 === 0 ){
                expenses += helmetPrice;
            
            }
            if(figths % 3 === 0){
                expenses += swordPrice;

            }
            if(figths % 6 === 0 ){
                expenses += shieldPrice

            }
            if(figths % 12 === 0 ){
                expenses += armorPrice

            }
        }

        console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)


}


gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)