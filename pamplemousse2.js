function eteindre_colonne (num: number) {
    led.unplot(num, 0)
    led.unplot(num, 1)
    led.unplot(num, 3)
    led.unplot(num, 4)
}
function allumer_colonne (num: number) {
    led.plot(num, 0)
    led.plot(num, 1)
    led.plot(num, 3)
    led.plot(num, 4)
}
basic.forever(function () {
    led.plot(0, 2)
    led.plot(2, 2)
    led.plot(4, 2)
    if (input.pinIsPressed(TouchPin.P0)) {
        allumer_colonne(0)
    } else {
        eteindre_colonne(0)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        allumer_colonne(2)
    } else {
        eteindre_colonne(2)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        allumer_colonne(4)
    } else {
        eteindre_colonne(4)
    }
})

