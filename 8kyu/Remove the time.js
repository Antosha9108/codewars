function shortenToDate(longDate) {
    return longDate.split(',')[0]
}
// P string
// R modified string
// E "Friday May 2, 9am" => Friday May 2
// P We can split the string at the comma and return the first part