// class WordCount {
//   final regex = RegExp(r"(\w+'?\w+|\d+|\w+)");
//   Map countWords(String phrase) {
//     var result = Map<String, int>();
//     regex
//         .allMatches(phrase.toLowerCase())
//         .map((match) => match.group(0))
//         .forEach((word) =>
//             result.update(word, (int val) => ++val, ifAbsent: () => 1));
//     return result;
//   }
// }

class WordCount {
  final regex = RegExp(r"(\w+'?\w+|\d+|\w+)");
  Map countWords(String phrase) {
    splitToList(phrase).fold(
        (word) => result.update(word, (int val) => ++val, ifAbsent: () => 1));
    return result;
  }

  Iterable<String> splitToList(String phrase) =>
      regex.allMatches(phrase.toLowerCase()).map((match) => match.group(0));
}
