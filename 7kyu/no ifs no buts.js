function noIfsNoButs(a, b) {
    switch (true) {
        case a < b:
            return `${a} is smaller than ${b}`
            break;
        case a > b:
            return `${a} is greater than ${b}`
            break;
        case a == b:
            return `${a} is equal to ${b}`
            break;

    }
}