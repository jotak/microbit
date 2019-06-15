basic.forever(function () {
  if (input.pinIsPressed(TouchPin.P0)) {
      basic.showLeds(`
          . . # . .
          . # . # .
          . # # # .
          . # # # .
          # # # # #
          `)
  } else {
      basic.showLeds(`
          . . . . .
          . . . . .
          # . # . #
          . . . . .
          . . . . .
          `)
  }
})
