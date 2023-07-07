function add(...n) {
    return n == null ? 0 : n.reduce((acc, c) => acc + c, 0);
}