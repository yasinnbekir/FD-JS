function computerStore(partPrice){

    let index = 0;
    let command = partPrice[index] ;
    index++;
    let totalSumWithoutTaxes = 0;
    isSpecial = false;
    while(command !== "special" && "regular"){
        if(command === "special"){
            isSpecial = true
        }
        let priceForPart = Number(command)
        totalSumWithoutTaxes += priceForPart
        
        command = partPrice[index]
        index++;
        

        if(partPrice < 0 ){
            console.log("Invalid price!")
        }

        if(totalSumWithoutTaxes < 0 ){
            console.log("Invalid order!")
        }
        
    }

    let totalSumWithTaxes = totalSumWithoutTaxes +=(totalSumWithoutTaxes*0.20);
    let amountOfTaxes = totalSumWithTaxes - totalSumWithoutTaxes;

    if(isSpecial){
        totalSumWithTaxes -=(totalSumWithTaxes*0.10);

    }
console.log("Congratulations you've just bought a new computer!");
console.log(`Price without taxes: ${totalSumWithoutTaxes}$`);
console.log(`Taxes: ${amountOfTaxes}$`);
console.log("-----------");
console.log(`Total price: ${totalSumWithTaxes}$`)


}

computerStore([
'1050',
'200',
'450',
'2',
'18.50',
'16.86',
'special'
])