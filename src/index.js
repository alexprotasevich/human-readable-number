module.exports = function toReadable (number) {
    let result = '';
    const string = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
      };

    if (string[number]) {
        return string[number];
    }

    if (number >= 100) {
        result = `${string[Math.floor(number / 100)]} hundred`;
        number = number % 100;
    }

    if (number > 0) {
        if (result) {
            result = `${result} `;
        }

        if (number < 20) {
            result = result + string[number];
        } else {
            result = result + string[Math.floor(number / 10) * 10];
            if (number % 10 > 0) {
                result = `${result} ${string[number % 10]}`;
            }
        }
    }
  return result;
}
