import 'dart:math';

class DifferenceOfSquares {
  num squareOfSum(int input) => pow(((input * (input + 1)) ~/ 2), 2);
  num sumOfSquares(int input) => ((input * (input + 1) * (2 * input + 1)) ~/ 6);
  num differenceOfSquares(int input) =>
      squareOfSum(input) - sumOfSquares(input);
}
