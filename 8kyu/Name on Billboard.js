function billboard(name, price = 30){
    let myPrice = 0;
    for(let i=0;i<name.length;i++){
        myPrice +=price
    }
    return myPrice
    } 