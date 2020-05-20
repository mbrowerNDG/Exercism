

class BeerSong {
  num bottle, increment;

  BeerSong.recite(this.bottle, this.increment) {
    while(this.increment > 0) {
      print('$this.bottle  bottles of beer on the wall, $this.bottle bottles of beer.
Take one down and pass it around, $this.bottle  bottles of beer on the wall.');
    }

  }
}
