//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(...array) {
        this.array = array;

    }
    isTriangle() {
        const sorted = this.array.sort((a, b) => a - b);
        const allGreaterThanZero = (value) => value > 0;
        return (sorted.every(allGreaterThanZero) && (sorted[0] + sorted[1] >= sorted[2]));
    }
    isEquilateral() {
        return (this.array.every(e => e == this.array[0]) && this.isTriangle(this.array));
    }
    isIsosceles() {
        return (this.isEquilateral(this.array) || this.isTriangle(this.array) && (new Set(this.array).size <= 2));
    }
    isScalene() {
        return true ? (this.isTriangle(this.array) && (new Set(this.array).size == this.array.length)) : false;
    }
}