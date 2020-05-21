class WordCount {
  final regex = RegExp(r"(\w+'?\w+|\d+|\w+)");

  Map countWords(String phrase) =>
      splitToList(phrase).fold<Map<String, int>>({}, updateCount);

  Map<String, int> updateCount(Map<String, int> result, String word) =>
      result..update(word, (val) => ++val, ifAbsent: () => 1);

  Iterable<String> splitToList(String phrase) =>
      regex.allMatches(phrase.toLowerCase()).map((match) => match.group(0));
}
