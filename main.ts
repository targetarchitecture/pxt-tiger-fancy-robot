RainbowSparkleUnicorn.start()
let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
let heart = strip.range(0, 12)
let mouth = strip.range(12, 15)
heart.setBrightness(50)
mouth.setBrightness(50)
heart.showColor(neopixel.colors(NeoPixelColors.Indigo))
mouth.showColor(neopixel.colors(NeoPixelColors.Red))
basic.showIcon(IconNames.Heart)
mouth.showRainbow(1, 360)
heart.showRainbow(1, 360)
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(1)

basic.forever(function () {
    basic.pause(1000);
    mouth.rotate(1);
    heart.rotate(1);
    strip.show();
})

function rainbowMouth() {
    waiting2 = 200
    while (true) {
        drawMouth(1, NeoPixelColors.Red)
        basic.pause(waiting2)
        drawMouth(2, NeoPixelColors.Yellow)
        basic.pause(waiting2)
        drawMouth(3, NeoPixelColors.Green)
        basic.pause(waiting2)
        drawMouth(4, NeoPixelColors.Blue)
        basic.pause(waiting2)
        drawMouth(5, NeoPixelColors.Indigo)
        basic.pause(waiting2)
        drawMouth(6, NeoPixelColors.Purple)
        basic.pause(waiting2)
        drawMouth(7, NeoPixelColors.Orange)
        basic.pause(waiting2)
        drawMouth(8, NeoPixelColors.White)
        basic.pause(waiting2)
        drawMouth(7, NeoPixelColors.Red)
        basic.pause(waiting2)
        drawMouth(6, NeoPixelColors.Yellow)
        basic.pause(waiting2)
        drawMouth(5, NeoPixelColors.Green)
        basic.pause(waiting2)
        drawMouth(4, NeoPixelColors.Blue)
        basic.pause(waiting2)
        drawMouth(3, NeoPixelColors.Indigo)
        basic.pause(waiting2)
        drawMouth(2, NeoPixelColors.Purple)
        basic.pause(waiting2)
        drawMouth(1, NeoPixelColors.Orange)
    }
}
let waiting2 = 0
let LEDs = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
heart.setBrightness(16)
mouth.setBrightness(16)
heart.showRainbow(1, 270)
colourMouth(NeoPixelColors.Green);

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


