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

console.log(totalSales(1, 1, 1));