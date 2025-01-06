function mango(quantity, price) {
    let freeMangoes = Math.floor(quantity / 3)

    return (quantity - freeMangoes) * price


}

// P two integers
// R integer
// E 3,2 => 6 ; 3,3 => 6
// P first we divide the quantity by 3 to get the amount of free mangoes. We can round it with Math.floor to remove decimal points.
//  (quantity - freeMangoes) * price

