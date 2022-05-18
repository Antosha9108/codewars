function findNeedle(haystack) {
    let found = haystack.findIndex(element => element ==='needle');
    if (found in haystack) {
        return(`found the needle at position ${found}`)
    }  else {
        return ("Your function didn't return anything")
    }
    
    }
  