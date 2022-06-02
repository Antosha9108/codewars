function enough(cap, on, wait) {
    let good = cap- (on+wait)
    if (good<0){
    return Math.abs(good)
    } else if (good >=0){
      return 0
    }
    }
    