export function findBMI(kg: number, cm: number) {
    const m = cm / 100
    return (kg / (m * m)).toFixed(1)
}

// The returned number (array) is in 'kg' unit.
export function findHealthyWeight(cm: number): [number, number] {
    const m = cm / 100

    // A BMI range of 18.5 to 24.9 is considered a 'healthy weight'
    const lowerBound = 18.5 * m * m;
    const upperBound = 24.9 * m * m;

    return [lowerBound, upperBound]
}

export function feetInchToCm(ft: number, inch: number): number {
    return Math.round(((ft * 30.48) + (inch * 2.54)))
}

export function stonePoundToKg(st: number, lbs: number): number {
    return Math.round((st * 6.35) + (lbs * 0.45))
}

export function kgToStonePound(kg: number): [number, number] {
    const decimal = kg * 0.1575;

    const st = Math.floor(decimal);
    const lbs = Math.round((decimal - st) * 14);    // 1 stone = 14 pounds

    return [st, lbs]
}