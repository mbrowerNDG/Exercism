class ReverseString {
  static reverse(word: string): string {
    const reversed = [...word].reverse().join('');
    return reversed;
  }
}

export default ReverseString;
