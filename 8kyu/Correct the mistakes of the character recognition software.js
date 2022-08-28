function correct(string)
{ 
  for (let i=0;i<string.length;i++){
    
  
  return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
}
  }
// P a string
// R same string but certain characters replaced for needed ones 5=S 0=O I=1
// E "L0ND0N"=>"LONDON" "DUBL1N" =>"DUBLIN"
// P we need to iterate through the string and if we have a match we need to replace it. We
//   would need to do it three times. Once for every mistake char case