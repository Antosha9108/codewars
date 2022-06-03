function findDifference(arr1, arr2) {
    resultA = arr1.reduce(function(a, b) {
        return a * b;
      });
    resultB = arr2.reduce(function(a, b) {
        return a * b;
      });
    return Math.abs(resultA-resultB)
  }