export default class Squares {
  private square: number;
  readonly squareOfSum: number;
  readonly sumOfSquares: number;
  readonly difference: number;
  constructor(square: number) {
    this.square = square;
    this.squareOfSum = Math.pow((this.square * (this.square + 1)) / 2, 2);
    this.sumOfSquares =
      (this.square * (this.square + 1) * (2 * this.square + 1)) / 6;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
