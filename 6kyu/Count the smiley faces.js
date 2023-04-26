//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smiles = [':)', ':D', ';)', ';D',
        ':-)', ':-D', ';-)', ';-D',
        ':~)', ':~D', ';~)', ';~D'
    ]

    return arr.length == 0 ? 0 : arr.filter(element => smiles.includes(element)).length
}