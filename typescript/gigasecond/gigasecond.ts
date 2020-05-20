const gigaInt = 1000000000 * 1000;
export class Gigasecond {
  private moment: Date;
  constructor(moment: Date) {
    this.moment = moment;
  }

  readonly date = (): Date => {
    return new Date(this.moment.valueOf() + gigaInt);
  };
}
