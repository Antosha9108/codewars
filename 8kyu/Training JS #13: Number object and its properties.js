function whatNumberIsIt(n) {
    if (n !== Number(n)) {
        return "Input number is Number.NaN"
    } else if (n === 1.7976931348623157e+308) {
        return "Input number is Number.MAX_VALUE"
    } else if (n === 5e-324) {
        return "Input number is Number.MIN_VALUE"
    } else if (n < -Number(1.7976931348623157e+308)) {
        return "Input number is Number.NEGATIVE_INFINITY"
    } else if (n > 1.7976931348623157e+308) {
        return "Input number is Number.POSITIVE_INFINITY"
    } else {
        return `Input number is ${n}`
    }
}