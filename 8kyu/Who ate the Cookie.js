function cookie(x){
  if (x ===String(x)){
    return "Who ate the last cookie? It was Zach!"
  } else if (x === Number(x)){
    return "Who ate the last cookie? It was Monica!"   
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}