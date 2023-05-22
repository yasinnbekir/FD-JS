function spiceMustFlow(yield){

    let daysCounter = 0;
    let workersConsume = 26;
    let totalYield = 0;

    while(yield >= 100){
        daysCounter++;
        totalYield += yield - workersConsume;
        yield -= 10;

    }
    if(totalYield >= workersConsume){
        totalYield -= workersConsume;

    }
    console.log(daysCounter)
    console.log(totalYield)



}

spiceMustFlow(111)