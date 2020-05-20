type Planet =
  | 'Earth'
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

const EarthYearInSeconds: number = 365.25 * 24 * 60 * 60;
const Orbital: { [key in Planet]: number } = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

export default class SpaceAge {
  readonly seconds: number;
  constructor(seconds: number) {
    this.seconds = seconds;
  }
  getYears = (planet: Planet): number =>
    this.roundIt(this.seconds / (Orbital[planet] * EarthYearInSeconds));

  roundIt = (value: number): number => Math.round(value * 1e2) / 1e2;
  onNeptune = (): number => this.getYears('Neptune');
  onUranus = (): number => this.getYears('Uranus');
  onSaturn = (): number => this.getYears('Saturn');
  onJupiter = (): number => this.getYears('Jupiter');
  onVenus = (): number => this.getYears('Venus');
  onMercury = (): number => this.getYears('Mercury');
  onMars = (): number => this.getYears('Mars');
  onEarth = (): number => this.getYears('Earth');
}
