// left button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
})

function startRobot () {
    RainbowSparkleUnicorn.start()
    heart.setBrightness(50)
    mouth.setBrightness(50)
    heart.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.showIcon(IconNames.Square)
    heart.showRainbow(1, 360)
    RainbowSparkleUnicorn.Sound.setVolume(13)
    RainbowSparkleUnicorn.Sound.playTrack(1)
    RainbowSparkleUnicorn.Light.turnAllOn()
    colourMouth(neopixel.colors(NeoPixelColors.Purple))
basic.forever(function () {
        basic.pause(500);
        heart.rotate(1);
        strip.show();
    })
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

radio.onReceivedString(function (receivedString) {
	
})

// right button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})

function rainbowMouth () {
    waiting = 200
    while (true) {
        drawMouth(1, NeoPixelColors.Red)
basic.pause(waiting)
        drawMouth(2, NeoPixelColors.Yellow)
basic.pause(waiting)
        drawMouth(3, NeoPixelColors.Green)
basic.pause(waiting)
        drawMouth(4, NeoPixelColors.Blue)
basic.pause(waiting)
        drawMouth(5, NeoPixelColors.Indigo)
basic.pause(waiting)
        drawMouth(6, NeoPixelColors.Purple)
basic.pause(waiting)
        drawMouth(7, NeoPixelColors.Orange)
basic.pause(waiting)
        drawMouth(8, NeoPixelColors.White)
basic.pause(waiting)
        drawMouth(7, NeoPixelColors.Red)
basic.pause(waiting)
        drawMouth(6, NeoPixelColors.Yellow)
basic.pause(waiting)
        drawMouth(5, NeoPixelColors.Green)
basic.pause(waiting)
        drawMouth(4, NeoPixelColors.Blue)
basic.pause(waiting)
        drawMouth(3, NeoPixelColors.Indigo)
basic.pause(waiting)
        drawMouth(2, NeoPixelColors.Purple)
basic.pause(waiting)
        drawMouth(1, NeoPixelColors.Orange)
    }
}
let waiting = 0
let mouth: neopixel.Strip = null
let heart: neopixel.Strip = null
function colourMouth(color: NeoPixelColors) {

    const waiting2 = 100;

    while (true) {
        for (let i = 0; i <= 8; i++) {
            drawMouth(i, color)
            basic.pause(waiting2)
        }
        for (let j = 8; j > 1; j--) {
            drawMouth(j, color)
            basic.pause(waiting2)
        }
    }
}
function drawMouth(size: number, color: NeoPixelColors) {

    size = Math.constrain(size, 0, 8)
    let midPixel = 7

    mouth.clear();

    if (size > 0) {
        mouth.setPixelColor(midPixel, neopixel.colors(color))

        for (let k = 0; k < size; k++) {
            mouth.setPixelColor(midPixel + k, neopixel.colors(color))
            mouth.setPixelColor(midPixel - k, neopixel.colors(color))
        }
    }

    mouth.show();
}
let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
heart = strip.range(0, 12)
mouth = strip.range(12, 15)
radio.setGroup(76)
radio.setTransmitPower(7)
startRobot()
