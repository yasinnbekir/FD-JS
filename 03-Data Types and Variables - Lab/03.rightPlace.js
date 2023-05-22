function rightPlace(str, char, result){

    let newString = str.replace("_", char)
    if(newString === result){
        console.log("Matched");

    }else{
        console.log("Not Matched")
    }
}
rightPlace('Str_ng', 'I',
'Strong') 