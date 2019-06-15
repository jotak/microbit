basic.showIcon(IconNames.No)
bitbot.neoRainbow()
bitbot.driveMilliseconds(300, 2000)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # . # . #
    # # # # #
    `)
bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 430)
basic.pause(500)
basic.showIcon(IconNames.Target)
bitbot.driveMilliseconds(300, 1300)
basic.pause(500)
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 430)
basic.pause(500)
basic.showIcon(IconNames.Heart)
bitbot.driveMilliseconds(300, 1700)
basic.pause(500)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 600, 400)
    bitbot.neoRotate()
})
basic.forever(function () {
	
})
