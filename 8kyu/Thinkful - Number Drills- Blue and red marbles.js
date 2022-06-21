function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blueLeft = blueStart - bluePulled
  let redLeft = redStart-redPulled
  let totalLeft = blueLeft+redLeft
  return blueLeft/totalLeft
}