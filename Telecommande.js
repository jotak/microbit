let Y = 0
let X = 0
let RawY = 0
let RawX = 0
radio.setGroup(1)
let CompteurMusique = 0
basic.showLeds(`
    # # # . .
    . . . # .
    # # . . #
    . . # . #
    # . # . #
    `)
basic.forever(function () {
    RawX = pins.analogReadPin(AnalogPin.P1) - 510
    RawY = pins.analogReadPin(AnalogPin.P2) - 526
    if (RawX < 0) {
        X = RawX / 505
    } else {
        X = RawX / 513
    }
    if (RawY < 0) {
        Y = RawY / 521
    } else {
        Y = RawY / 497
    }
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        CompteurMusique += 1
        CompteurMusique = CompteurMusique % 5
        if (CompteurMusique == 0) {
            music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        } else if (CompteurMusique == 1) {
            music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        } else if (CompteurMusique == 2) {
            music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        } else if (CompteurMusique == 3) {
            music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        } else {
            music.stopMelody(MelodyStopOptions.All)
        }
        basic.pause(500)
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
})
