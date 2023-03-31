function keepOrder(ary, val) {
    let smallestNum = ary.filter(num => num < val)
    return smallestNum.length

}