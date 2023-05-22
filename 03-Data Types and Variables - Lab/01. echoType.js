function echoType(parameter) {


    let typeOfParameter = typeof (parameter)
    if (typeOfParameter === "number" || typeOfParameter === "string") {
        console.log(typeOfParameter)
        console.log(parameter);

    }else{
        console.log(typeOfParameter);
        console.log("Parameter is not suitable for printing")  
    }






}
echoType('Hello, JavaScript!')