// Create a function which translates a given DNA string into RNA.
// Changes "T" to "U"
//8 kyu

function DNAtoRNA(dna) {
    let rna = /t/gi
    return dna.replace(rna, 'U')
  }