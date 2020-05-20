import 'dart:math';

class ArmstrongNumbers {
  bool isArmstrongNumber(num input) {
    List<String> array = input.toString().split('');
    num totalSumsq = array
        .map((n) => int.parse(n))
        .map((n) => pow(n, array.length))
        .fold(0, (prev, element) => prev + element);
    return input == totalSumsq;
  }
}
