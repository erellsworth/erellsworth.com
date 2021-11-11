export const isNumeric = (n: unknown): boolean => {
    return !isNaN(parseFloat(n as string)) && isFinite(n as number);
}