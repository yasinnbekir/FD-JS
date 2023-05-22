function vacation(group, type, day) {
    let price = 0;

    if (type === "Students") {
        switch (day) {
            case "Friday":
                price = 8.45 * group;
                break;
            case "Saturday":
                price = 9.80 * group;
                break;
            case "Sunday":
                price = 10.46 * group
                break;
        }
        if (group >= 30) {
            price -= price * 0.15

        }
    }
    else if (type === "Business") {
        switch (day) {
            case "Friday":
                price = 10.90 * group;
                break;
            case "Saturday":
                price = 15.60 * group;
                break;
            case "Sunday":
                price = 16 * group;
                break;
        }
        if (group >= 100) {
            price -= (price / group) * 10
        }
    }
    else if (type === "Regular") {
        switch (day) {
            case "Friday":
                price = 15 * group;
                break;
            case "Saturday":
                price = 20 * group;
                break;
            case "Sunday":
                price = 22.50 * group;
                break;
        }
        if (group >= 10 && group <= 20) {
            price -= (price * 0.05)

        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(40, "Regular", "Saturday") 