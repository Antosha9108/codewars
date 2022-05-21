class SmallestIntegerFinder {
    findSmallestInt(args) {
      function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
        args.sort(compareNumeric)
        return args[0]
      }
    }