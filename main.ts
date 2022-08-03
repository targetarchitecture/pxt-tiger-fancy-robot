RainbowSparkleUnicorn.start()
let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
let heart = strip.range(0, 12)
let smile = strip.range(12, 15)
heart.setBrightness(50)
smile.setBrightness(50)
heart.showColor(neopixel.colors(NeoPixelColors.Indigo))
smile.showColor(neopixel.colors(NeoPixelColors.Red))
basic.showIcon(IconNames.Heart)
smile.showRainbow(1, 360)
heart.showRainbow(1, 360)
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(1)

basic.forever(function () {
    basic.pause(1000);
    smile.rotate(1);
    heart.rotate(1);
    strip.show();
})


