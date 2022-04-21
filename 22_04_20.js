// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.
// 7 kyu

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/G/g, 'c').replace(/C/g, 'g').toUpperCase()
  }