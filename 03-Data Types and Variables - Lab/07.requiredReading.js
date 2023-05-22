function requiredReading(numberPages, pagesPerHour,dayToRead){

let totalTimeToRead = numberPages / pagesPerHour ; 
let requiredHours = totalTimeToRead / dayToRead ; 
console.log(requiredHours);

}


requiredReading(212, 20 , 2 )