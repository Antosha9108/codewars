function switcheroo(x) {
    return x.replaceAll('a', 'x').replaceAll('b', 'y').replaceAll('x', 'b').replaceAll('y', 'a')
}



function switcheroo(x) {
    return x.split('').map(char => char === 'a' ? 'b' : (char === 'b' ? 'a' : 'c')).join("")
}

function switcheroo(x) {
    return x.split('').map(char => {
        if (char === 'a') {
            return 'b'
        } else if (char === 'b') {
            return 'a'
        } else {
            return 'c'
        }
    }).join('')
}
