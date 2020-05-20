import { Http2Session } from "http2";

export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }
    
    kind() {
       switch(this.sides)
       {}
    }

function isTriangle(...sides: number[]) {
        const sorted =sides.sort((a: number, b: number) => a - b);
        const allGreaterThanZero = (value: number) => value > 0;
        return (sorted.every(allGreaterThanZero) && (sorted[0] + sorted[1] >= sorted[2]));
    }
   function isEquilateral(...sides: number[]) {
        return (sides.every((e: any) => e == sides[0]) && this.isTriangle(this.sides));
    }
    function isIsosceles(...sides: number[]) {
        return (isEquilateral(this.sides) || this.isTriangle(this.sides) && (new Set(this.sides).size <= 2));
    }
    function isScalene(...sides: number[]) {
        return  (isTriangle(this.sides) && (new Set(sides).size == sides.length));
    }
}