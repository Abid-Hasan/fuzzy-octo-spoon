function seerToMon(seer) {
    if (typeof seer != "number") return "Please provide a valid number.";
    if (seer < 0) return "Quantity can not be negative.";

    const mon = seer / 40;
    return mon;
}

console.log(seerToMon(60));