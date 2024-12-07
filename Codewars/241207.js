// DNA to RNA Conversion
function DNAtoRNA(dna) {
  let rna = "";
  dna = [...dna];
  for(let i = 0; i < dna.length; i++) {
    if(dna[i] === "T"){
      dna[i] = "U";
    }
    rna = rna + dna[i];
  }
  return rna;
}