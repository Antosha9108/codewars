function add(...args) {
    return args.map((el, index) => el * (index + 1)).reduce((acc, c) => acc + c, 0)
}