type DNA = 'G' | 'C' | 'T' | 'A';
type RNA = 'C' | 'G' | 'A' | 'U';

class Transcriptor {
  private DnaRnaKey = new Map<DNA, RNA>([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
  ]);
  toRna(dna: string): string {
    const array = dna.split('');
    const transcribe: RNA[] = [];
    array.forEach((element) => {
      if (!this.isDNA(element)) {
        throw Error('Invalid input DNA.');
      }
      transcribe.push(this.getRNA(element));
    });
    return transcribe.join('');
  }
  isDNA(input: string): input is DNA {
    return this.DnaRnaKey.has(input as DNA);
  }
  getRNA(input: DNA): RNA {
    return this.DnaRnaKey.get(input) as RNA;
  }
}

export default Transcriptor;
