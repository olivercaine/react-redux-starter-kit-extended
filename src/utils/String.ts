import { Months } from '@common/month-enum-ts/lib/Months';
/**
 * This is just an example.
 */
export function sayWelcome() {
    return `TypeScript says the month is ${Months[new Date().getMonth()]}`;
}
