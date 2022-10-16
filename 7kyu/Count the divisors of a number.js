function getDivisorsCnt(n){
  let num = [];
  for (let i=0;i<=n;i++){
    if (n%i==0){
      num.push(i)
    }
    
  }
  return num.length
}