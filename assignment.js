//========//
// Task 1 //
//========//

function seerToMon(seer) {
    // Input validation
    if (typeof seer != "number") {
        return "Please provide a valid number.";
    }
    if (seer < 0) {
        return "Quantity can not be negative.";
    }

    // 40 seer = 1 mon
    const mon = seer / 40;
    return mon;
}

//========//
// Task 2 //
//========//

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // Input validation
    if (typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number") {
        return "Please provide valid numbers.";
    }
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Quantity can not be negative.";
    }

    // Calculating individual sales
    const shirtSales = shirtQuantity * 100;
    const pantSales = pantQuantity * 200;
    const shoeSales = shoeQuantity * 500;

    // Returning total sales
    return shirtSales + pantSales + shoeSales;
}

//========//
// Task 3 //
//========//

function deliveryCost(tShirt) {
    // Input validation
    if (typeof tShirt != "number") {
        return "Please provide a valid number.";
    }
    if (tShirt < 0) {
        return "Quantity can not be negative.";
    }

    let cost = 0;
    // from 201
    if (tShirt > 200) {
        const tShirtMoreThan200 = tShirt - 200;
        cost += tShirtMoreThan200 * 50;
        tShirt -= tShirtMoreThan200;
    }
    // from 101 to 200
    if (tShirt > 100) {
        const tShirtMoreThan100 = tShirt - 100;
        cost += tShirtMoreThan100 * 80;
        tShirt -= tShirtMoreThan100;
    }
    // from 0 to 100
    cost += tShirt * 100;

    return cost;
}

//========//
// Task 4 //
//========//

function perfectFriend(friends) {
    // Input validation
    if (!(Array.isArray(friends))) {
        return "Please provide an array of your friends' name.";
    }
    if (friends.length == 0) {
        return "Go, make some friendships first.";
    }
    for (const friend of friends) {
        if (typeof friend != "string") {
            return "Each element of the array must be string.";
        }
    }

    // Looping through the elements
    for (const friend of friends) {
        if (friend.length == 5) {
            return friend;
        }
    }
    return "No friend is perfect.";
}