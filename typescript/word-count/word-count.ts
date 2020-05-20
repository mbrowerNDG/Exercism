export default class Words {
  private static regex = new RegExp(/\s+|\t|\n/g);
  count(phrase: string): object {
    const result = new Map();
    this.processPhrase(phrase).forEach((word) =>
      result.set(word, (result.get(word) || 0) + 1)
    );
    return result;
  }

  processPhrase = (phrase: string) =>
    phrase
      .toLowerCase()
      .split(Words.regex)
      .filter((word) => word.length > 0);
}
