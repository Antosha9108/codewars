function calc(x){
    let total1 = x.split('').map((element,index)=>x.charCodeAt(index)).join('')
    console.log(total1)

    // let total2 = total1.replaceAll('7','1')
    const total2 = total1.replace(/7/g, 1);  
   
    console.log(total2)
    return total1.split('').map(Number).reduce((a,b)=>(a+b))-total2.split('').map(Number).reduce((a,b)=>(a+b))
    }
    
    //? P a string 
    //? R an integer ( difference between two totals)
    //? E(  'abcdef'), 6)
    //? P first we need convert string into an array. 
    //?   after that we can map through it and return charscodes for each
    //?   join it into a string and assign to total1 one var
    //?   then we declare total2 variable and replaceAll 7 with one
    //?   now we need to reduce both of totals
    //?   and return the difference.
    
    console.log(calc('ABC'))