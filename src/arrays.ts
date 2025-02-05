/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 1) {
        const newArray: number[] = [numbers[0], numbers[0]];
        return newArray;
    } else if (numbers.length === 0) {
        return numbers;
    } else {
        const newArray: number[] = [numbers[0], numbers[numbers.length - 1]];
        return newArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */

export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((num: string): number => {
        const parsedInt = parseInt(num);
        if (isNaN(parsedInt)) {
            return 0;
        } else {
            return parsedInt;
        }
    });
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = amounts.map((num: string): number => {
        if (num.startsWith("$")) {
            num = num.substring(1);
        }
        const parsedFloat = parseFloat(num);
        if (isNaN(parsedFloat)) {
            return 0;
        } else {
            return parsedFloat;
        }
    });
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const capitalized = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    const noQ = capitalized.filter((str) => {
        return !(str[str.length - 1] === "?");
    });
    return noQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const correctColors = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors.length === correctColors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return `${sum}=${addends.join("+")}`;
    }
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
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0
    );

    if (firstNegative === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, sum];
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number, index: number) =>
                index < firstNegative ? currentTotal + num : currentTotal,
            0
        );
        return [
            ...values.slice(0, firstNegative + 1),
            sum,
            ...values.slice(firstNegative + 1)
        ];
    }
}
