function switcheroo(x) {
    return x.replaceAll('a', 'x').replaceAll('b', 'y').replaceAll('x', 'b').replaceAll('y', 'a')
}



function switcheroo(x) {
    return x.split('').map(char => char === 'a' ? 'b' : (char === 'b' ? 'a' : 'c')).join("")
}