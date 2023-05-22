function amazingNumbers(num){

num = num.toString()
let sum = 0;
isAmazing = false 

for(let i = 0; i < num.length;i++){
    sum += Number(num[i]);

}
if(sum == 9 ){
    isAmazing = true
    
}
if(isAmazing == true){
    console.log(`${num} Amazing? True`)

}else{
    console.log(`${num} Amazing? False`)
}


}
amazingNumbers(999)