//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const DnaRnaKey = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
]);
export const toRna = (dna) => {

    const array = dna.toUpperCase().split('');
    const transcribe = [];
    array.map((element) => {
        if (DnaRnaKey.has(element)) {
            transcribe.push(DnaRnaKey.get(element));
        } else {
            throw Error('Invalid input DNA.');
        }
    });
    return transcribe.join('');
}