function startRobot() {
    radio.setGroup(76)
    radio.setTransmitPower(7)

    RainbowSparkleUnicorn.start()
    //heart.setBrightness(50)
    //mouth.setBrightness(50)
    //heart.showColor(neopixel.colors(NeoPixelColors.Indigo))
   // mouth.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Square)
   // heart.showRainbow(1, 360)
    RainbowSparkleUnicorn.Sound.setVolume(13)
    RainbowSparkleUnicorn.Sound.playTrack(1)
    RainbowSparkleUnicorn.Light.turnAllOn()

  //  loops.everyInterval(500, function () {
    //    heart.rotate(1);
     //   strip.show();
   // })
}

startRobot()

input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

radio.onReceivedString(function (receivedString) {

})

// left button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
})

// right button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})

// let mouth: neopixel.Strip = null
// let heart: neopixel.Strip = null
//let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB);
//let heart = strip.range(0, 12);
//let mouth = strip.range(12, 15);
