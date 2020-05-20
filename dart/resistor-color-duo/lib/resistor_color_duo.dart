class ResistorColorDuo {
  final colorsMapped = const {
    'black': '0',
    'brown': '1',
    'red': '2',
    'orange': '3',
    'yellow': '4',
    'green': '5',
    'blue': '6',
    'violet': '7',
    'grey': '8',
    'white': '9'
  };
  int value(List<String> list) {
    String results = '';
    for (int i = 0; i < 2; i++) {
      results += colorsMapped[list[i]];
    }
    return int.parse(results.trim());
  }
}
