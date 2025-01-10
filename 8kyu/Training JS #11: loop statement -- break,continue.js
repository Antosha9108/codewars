function grabDoll(dolls) {
    var bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') {
            bag.push(dolls[i])
            if (bag.length == 3) {
                break
            }
            continue
        }
    }

    return bag;
}

// P an array of dolls
// R an array of dolls called bag that breaks the loop once the length is 3
// E (["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
// P first we need to create a for loop and push hello kitty and barbies into the bag array.
//   we can set the conditional here with the bag.length <3 continue. if it's not break out of the loop 