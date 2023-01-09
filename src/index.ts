/**
 * check if a boolean is true
 * 
 * @param value the value to check 
 * @returns is the value true and a boolean
 */
export function isTrue(value: boolean): boolean {
    return typeof (value) === "boolean" && !!value;
}