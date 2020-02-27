module.exports = function toReadable(number) {
    let humanReadableNumber = "";
    let numberDigits = function getlength(number) {
        return number.toString().length;
    };

    let countDigits = number.toString().split("");

    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let firstDozen = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let dozens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (numberDigits(number) === 1) {
        humanReadableNumber = units[number];
    }

    if (numberDigits(number) === 2) {
        let dozensOfNumber = +countDigits[0];
        let unitsOfNumber = +countDigits[1];
        if (number === 10) {
            humanReadableNumber = dozens[dozensOfNumber - 1];
        }
        if (number <= 19 && number !== 10) {
            humanReadableNumber = firstDozen[unitsOfNumber - 1];
        }
        if (number >= 20 && number <= 99) {
            if (unitsOfNumber === 0) {
                humanReadableNumber = dozens[dozensOfNumber - 1];
            } else if (unitsOfNumber !== 0) {
                humanReadableNumber =
                    dozens[dozensOfNumber - 1] + " " + units[unitsOfNumber];
            }
        }
    }

    if (numberDigits(number) === 3) {
        if (number >= 100 && number <= 999) {
            let hundredsOfNumber = +countDigits[0];
            let dozensOfNumber = +countDigits[1];
            let unitsOfNumber = +countDigits[2];

            if (dozensOfNumber === 0 && unitsOfNumber === 0) {
                humanReadableNumber = units[hundredsOfNumber] + " hundred";
                
            } else if (dozensOfNumber === 0 && unitsOfNumber !== 0) {
                humanReadableNumber =
                    units[hundredsOfNumber] +
                    " hundred " +
                    units[unitsOfNumber];
            } else if (dozensOfNumber === 1 && unitsOfNumber > 0) {
                humanReadableNumber =
                    units[hundredsOfNumber] +
                    " hundred " +
                    firstDozen[unitsOfNumber - 1];
            } else if (dozensOfNumber > 0 && unitsOfNumber === 0) {
                humanReadableNumber =
                    units[hundredsOfNumber] +
                    " hundred " +
                    dozens[dozensOfNumber - 1];
            } else {
                humanReadableNumber =
                    units[hundredsOfNumber] +
                    " hundred " +
                    dozens[dozensOfNumber - 1] +
                    " " +
                    units[unitsOfNumber];
            }
        }
    }

    return humanReadableNumber;
};
