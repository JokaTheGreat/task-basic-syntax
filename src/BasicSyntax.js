export function romanToInteger(str) {
    let result = 0;
    let length = str.length;
    let previousNumber = 0;
    let currentNumber = 0;

    for (let i = length - 1; i >= 0; i--) {
        switch (str[i]) {
            case 'I':
                currentNumber = 1;
                break;
            case 'V':
                currentNumber = 5;
                break;
            case 'X':
                currentNumber = 10;
                break;
            case 'L':
                currentNumber = 50;
                break;
            case 'C':
                currentNumber = 100;
                break;
            case 'D':
                currentNumber = 500;
                break;
            case 'M':
                currentNumber = 1000;
                break;
            default:
                return NaN;
        }

        if (currentNumber >= previousNumber) {
            result += currentNumber;
        } else {
            result -= currentNumber;
        }

        previousNumber = currentNumber;
    }

    return result;
}
