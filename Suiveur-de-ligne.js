radio.onReceivedValue(function (name, value) {
  if (name == "X") {
      if (value < 0) {
          bitbot.driveTurn(BBRobotDirection.Left, -2 * Vitesse * value)
      } else if (value > 0) {
          bitbot.driveTurn(BBRobotDirection.Right, 2 * Vitesse * value)
      } else {
        
      }
  } else if (name == "Y") {
      Vitesse = 800 * value
  } else {
    
  }
})
let Vitesse = 0
Vitesse = 200
radio.setGroup(1)
basic.showLeds(`
  # . # . #
  . . . . .
  # . # . #
  . . . . .
  # . # . #
  `)
basic.forever(function () {
  if (bitbot.readLine(BBLineSensor.Left) == 1) {
      bitbot.driveTurn(BBRobotDirection.Left, Vitesse)
      bitbot.neoSetPixelColor(5, bitbot.BBColours(BBColors.Red))
      bitbot.neoSetPixelColor(11, bitbot.BBColours(BBColors.Black))
  } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
      bitbot.driveTurn(BBRobotDirection.Right, Vitesse)
      bitbot.neoSetPixelColor(5, bitbot.BBColours(BBColors.Black))
      bitbot.neoSetPixelColor(11, bitbot.BBColours(BBColors.Red))
  } else {
      bitbot.drive(Vitesse)
      bitbot.neoSetPixelColor(5, bitbot.BBColours(BBColors.Green))
      bitbot.neoSetPixelColor(11, bitbot.BBColours(BBColors.Green))
  }
})
