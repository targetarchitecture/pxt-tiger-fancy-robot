
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
    mouth.showColor(neopixel.colors(NeoPixelColors.Blue))
    loops.everyInterval(500, function () {
        heart.rotate(1);
        strip.show();
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
            //     RainbowSparkleUnicorn.Movement.setServoPulse(RainbowSparkleUnicorn.Movement.Pins.P3,123);
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
        default:

            const parts = receivedString.split(",")
            const X = parts[0].substr(2);
            const Y = parts[1].substr(2);

            if (receivedString.substr(0, 2) == "RX") {
                const RX = parseInt(X);
                const RY = parseInt(Y);

                const pwm = Math.map(RY, 0, 256, 426 - 240, 426);

                RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, 339);
            }
            if (receivedString.substr(0, 2) == "LX") {
                const LX = parseInt(X);
                const LY = parseInt(Y);

                const pwm = Math.map(LY, 0, 256, 339 - 155, 155);

                RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, pwm);
            }
            break;
    }
}

radio.onReceivedString(function (receivedString) {

    dealWithJoystickMessage(receivedString);

    led.toggle(0, 0);
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