function startRobot() {
    RainbowSparkleUnicorn.start()
    heart.setBrightness(50)
    mouth.setBrightness(50)
    heart.showColor(neopixel.colors(NeoPixelColors.Indigo))
    //mouth.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Square)
    //mouth.showRainbow(1, 360)
    heart.showRainbow(1, 360)

    RainbowSparkleUnicorn.Sound.setVolume(13)
    RainbowSparkleUnicorn.Sound.playTrack(1)

    RainbowSparkleUnicorn.Light.turnAllOn();

    // colourMouth(neopixel.colors(NeoPixelColors.Purple))

    basic.forever(function () {
        basic.pause(500);
        // mouth.rotate(1);
        heart.rotate(1);
        strip.show();
    })

    basic.forever(function () {
        // basic.pause(500);      

        let soundLevel = input.soundLevel();

        if (soundLevel < 35) {
            drawMouth(8, neopixel.colors(NeoPixelColors.Black));
        } else {
            drawMouth(8, neopixel.colors(NeoPixelColors.Purple));
        }
    })

    radio.setGroup(76)
    radio.setTransmitPower(7)
}

radio.onReceivedValue(function (name: string, value: number) {
    basic.showString(name + ":" + value);
})

input.onButtonPressed(Button.A, function () {
    RainbowSparkleUnicorn.Sound.setVolume(10)
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 4))
})

function rainbowMouth() {
    const waiting = 200
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

function colourMouth(color: NeoPixelColors) {

    const waiting = 100;

    while (true) {
        for (let i = 0; i <= 8; i++) {
            drawMouth(i, color)
            basic.pause(waiting)
        }
        for (let j = 8; j > 1; j--) {
            drawMouth(j, color)
            basic.pause(waiting)
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
let heart = strip.range(0, 12)
let mouth = strip.range(12, 15)

startRobot();

//left button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
})

//right button
RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})