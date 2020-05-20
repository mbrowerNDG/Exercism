class CollatzConjecture {
  int steps(int number) {
    int step = 0;
    onlyPositive(number);
    while (number > 1) {
      checkandupdate(number);
      print(step);
      number = checkandupdate(number);
      step++;
    }
    return step;
  }

  int checkandupdate(int num) => num = num.isEven ? num ~/ 2 : num * 3 + 1;
  void onlyPositive(int num) {
    if (num.isNegative || num == 0) {
      throw ArgumentError('Only positive numbers are allowed');
    }
  }
}
