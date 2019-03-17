import { Months } from 'month-enum-ts/lib/months';
/**
 * This is just an example.
 */
export function sayWelcome() {
    return `TypeScript says the month is ${Months[new Date().getMonth()]}`;
}
