



input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

radio.onReceivedString(function (receivedString) {

})

function startRobot() {
    radio.setGroup(76)
    radio.setTransmitPower(7)

    heart.setBrightness(50)
    heart.showRainbow(1, 360)

    mouth.setBrightness(50)
    mouth.showColor(neopixel.colors(NeoPixelColors.Red))

    loops.everyInterval(500, function () {
        heart.rotate(1);
        strip.show();
    })

    RainbowSparkleUnicorn.start()

    RainbowSparkleUnicorn.Sound.setVolume(13)
    RainbowSparkleUnicorn.Sound.playTrack(1)
    RainbowSparkleUnicorn.Light.turnAllOn()

}




// left button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
})

// right button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})


let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
let heart = strip.range(0, 12)
let mouth = strip.range(12, 15)

startRobot();

