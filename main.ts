
const headServo = RainbowSparkleUnicorn.Movement.Pins.P15;
const leftArmServo = RainbowSparkleUnicorn.Movement.Pins.P14;
const rightArmServo = RainbowSparkleUnicorn.Movement.Pins.P13;


RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})

RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
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

        led.toggle(0, 0)
    })
    RainbowSparkleUnicorn.start()
    RainbowSparkleUnicorn.Sound.setVolume(13)
    RainbowSparkleUnicorn.Sound.playTrack(1)
    RainbowSparkleUnicorn.Light.turnAllOn()

    RainbowSparkleUnicorn.Movement.setServoPulse(headServo, 384);
    RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, 339);
    RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, 240);

}
input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})
function dealWithJoystickMessage(receivedString: string) {
    switch (receivedString) {
        case "BUTTON_LEFT":
            RainbowSparkleUnicorn.Movement.setServoPulse(RainbowSparkleUnicorn.Movement.Pins.P3,123);
            //
            break;
        case "TILTRIGHT":
            //

            break;
        case "BUTTON_B":
            //
            break;
        case "TILTLEFT":
            //
            break;
        case "BUTTON_AB":
            //
            break;
        case "BUTTON_A":
            //
            break;
        case "THUMBSTICK_RIGHT":
            //
            break;
        case "THUMBSTICK_LEFT":
            //
            break;
        case "BUTTON_RIGHT":
            //
            break;
    }
}
radio.onReceivedString(function (receivedString) {
    dealWithJoystickMessage(receivedString)
})
let mouth: neopixel.Strip = null
let heart: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
heart = strip.range(0, 12)
mouth = strip.range(12, 15)
startRobot()

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})