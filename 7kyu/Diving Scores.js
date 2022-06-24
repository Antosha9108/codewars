function scoreOfDive(scores, tariff) {
    let score = scores.sort((a,b)=> a-b).slice(2,5).reduce((acc,c)=>acc+c)*tariff
    return score.toFixed(2)
 }

 //or return (scores.sort((a,b)=> a-b).slice(2,5).reduce((acc,c)=>acc+c)*tariff).toFixed(2)