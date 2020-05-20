const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;
type Color = typeof COLORS[number];
export class ResistorColor {
  private colors: Color[];
  constructor(colors: Color[]) {
    this.colors = colors;
    if (this.colors.length < 2) {
      throw Error('At least two colors need to be present');
    }
  }
  value(): number {
    const result =
      COLORS.indexOf(this.colors[0]) * 10 + COLORS.indexOf(this.colors[1]);
    return result;
  }
}
