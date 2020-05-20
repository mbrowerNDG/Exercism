//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
    let step = 0;
    if (number <= 0) {
        throw new Error('Only positive numbers are allowed');
    }
    for (step; number != 1; step++) {
        number % 2 == 0 ? (number = number / 2) : (number = number * 3 + 1);
    }
    return step;
};