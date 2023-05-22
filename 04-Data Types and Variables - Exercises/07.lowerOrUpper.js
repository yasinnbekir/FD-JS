function lowerOrUpper(char){

    let caseRes = "";

    if(char === char.toUpperCase()){
        caseRes = "upper-case"

    }else{
        caseRes = "lower-case"
    }
console.log(caseRes)


}

lowerOrUpper('A')