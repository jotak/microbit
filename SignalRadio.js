radio.onReceivedNumber(function (receivedNumber) {
  music.setTempo(4.8 * radio.receivedPacket(RadioPacketProperty.SignalStrength) + 492)
  basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
radio.setGroup(15)
music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.ForeverInBackground)
basic.forever(function () {
  radio.sendNumber(100)
  basic.pause(100)
})
