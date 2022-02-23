module.exports = function toReadable(number) {
    const numberStr = number.toString(10);
    const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const digit2 = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const digit3 = ["hundred"];


    if (numberStr.length === 3 && Number(numberStr.slice(1)) >= 20) {
        return digit[numberStr[0]] + " " + digit3 + " " + (numberStr[1] === "0" ? "" : digit2[numberStr[1] - 1]) + (numberStr[2] == 0 ? "" : " " + digit[numberStr[2]]);
    } else if (numberStr.length === 3 && Number(numberStr.slice(1)) < 20) {
        let n = Number(numberStr.slice(1));
        return digit[numberStr[0]] + " " + digit3 + (n === 0 ? "" : " " + digit[n]);
    }
    else if (numberStr.length === 2 && numberStr >= 20) {
        return digit2[numberStr[0] - 1] + (numberStr[1] === "0" ? "" : " " + digit[numberStr[1]]);
    } else {
        return digit[numberStr];
    }
}
