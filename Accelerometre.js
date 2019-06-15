music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1300) {
        music.setTempo(300)
        basic.showIcon(IconNames.Square)
    } else {
        if (input.acceleration(Dimension.Strength) > 1150) {
            music.setTempo(120)
            basic.showIcon(IconNames.SmallSquare)
        } else {
            music.setTempo(60)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
