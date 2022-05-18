function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    //split the string 
    dna =dna.split('')
    
    // find if there is a match for "T" and replace it with U
    for (let index = 0; index < dna.length; index++) {
        if (dna[index] === 'T') {
          dna[index] = 'U';
          
        }
      }
      return(dna.join(''))
  }

//quicker solution from codewars
//   function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
//   }