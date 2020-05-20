// Put your code here
const pointsKey = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

num score(String word) {
  List<String> letters = word.toUpperCase().split('');
  List<num> scores = letters.map((letter) => getLetterValue(letter)).toList();
  return scores.fold(0, (previous, current) => previous + current);
}

num getLetterValue(String letter) {
  return pointsKey.entries
      .firstWhere((entry) => entry.value.contains(letter))
      .key;
}
