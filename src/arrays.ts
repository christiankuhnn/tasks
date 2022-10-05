/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const num = numbers[0];
    const num2 = numbers[numbers.length - 1];
    if (numbers.length === 0) {
        const secarray = [];
        return secarray;
    } else {
        const newarray = [num, num2];
        return newarray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        newArr.push(numbers[i] * 3);
    }
    return newArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numberArray = [];
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        //var s = '';
        //var num = parseInt(s) || 0;
        const stringToChange = numbers[i];
        const newInt = parseInt(stringToChange) || 0;
        numberArray.push(newInt);
    }
    return numberArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numberArray = [];
    const length = amounts.length;
    for (let i = 0; i < length; i++) {
        //var s = '';
        //var num = parseInt(s) || 0;
        let stringToChange = amounts[i];
        //take away the dollar from the string and update it
        if (stringToChange.includes("$")) {
            stringToChange = stringToChange.substring(1);
        }
        const newInt = parseInt(stringToChange) || 0;
        numberArray.push(newInt);
    }
    return numberArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newList = []; // create a new list
    const length = messages.length;
    for (let i = 0; i < length; i++) {
        //for loop for checking each element

        if (messages[i].includes("?", -1)) {
            //if  end in question delete
            continue;
        } else {
            if (messages[i].includes("!", -1)) {
                // eslint-disable-next-line no-var
                var temp = messages[i].toUpperCase();
            } else {
                temp = messages[i];
            }
        }

        newList.push(temp);
    }
    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //for loop to check each element
    const length = words.length;
    //create count for each element that is less than 4
    let count = 0;
    for (let i = 0; i < length; i++) {
        //increase count if less than 4
        if (words[i].length < 4) {
            count += 1;
        } else {
            continue;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let temp;
    //base case
    if (colors.length === null || colors.length === 0) {
        temp = true;
    } else {
        for (let i = 0; i < colors.length; i++) {
            if (
                colors[i] === "red" ||
                colors[i] === "blue" ||
                colors[i] === "green"
            ) {
                temp = true;
                continue;
            } else {
                temp = false;
                break;
            }
        }
    }
    return temp;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //get sum
    let empty_string = "";
    let count = 0;
    for (let i = 0; i < addends.length; i++) {
        //add each number to a count

        count += addends[i];
    }
    const s = count.toString();
    empty_string += s;
    empty_string += "=";
    if (addends.length == 0) {
        empty_string += "0";
    }
    for (let i = 0; i < addends.length; i++) {
        if (i != 0) {
            empty_string += "+";
        }
        empty_string += addends[i].toString();
    }

    return empty_string;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const loc = values.findIndex(
        (negativeNum: number): boolean => negativeNum < 0
    );
    if (loc === -1) {
        const addSum = values.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...values, addSum];
    } else {
        const begin = values.slice(0, loc);
        const end = values.slice(loc + 1, values.length);
        const addSum = begin.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...begin, values[loc], addSum, ...end];
    }
}
