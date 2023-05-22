function triangleOfNumbers(num){
    let buff = "";

    for(let rows = 1; rows <= num; rows++){
        for(let cols = 1; cols <= rows; cols++){
            buff += `${rows} `
        }
        console.log(buff)
        buff = "";

    }


}
triangleOfNumbers(5)