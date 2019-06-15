basic.showIcon(IconNames.Skull)
let step = 1
basic.forever(function () {
    bitbot.driveMilliseconds(300, Math.ceil(step / 4) * 400)
    bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 400)
    step += 1
})
