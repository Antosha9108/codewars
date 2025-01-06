String.prototype.toJadenCase = function () {
    const words = this.split(' ')
    console.log(words)
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};