
let LeftArmPWM = 339;
let RightArmPWM = 240;
let HeadPWM = 384;

let joystickRX = 128;
let joystickRY = 128;
let joystickLX = 128;
let joystickLY = 128;

datalogger.log(null).

RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)
})

RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)
})

function startRobot() {
    RainbowSparkleUnicorn.start()
    radio.setGroup(76)
    radio.setTransmitPower(7)
    heart.setBrightness(50)
    heart.showRainbow(1, 360)
    mouth.setBrightness(50)
    mouth.showColor(neopixel.colors(NeoPixelColors.Indigo))

    RainbowSparkleUnicorn.Sound.setVolume(15)
    RainbowSparkleUnicorn.Sound.playTrack(1)
    RainbowSparkleUnicorn.Light.turnAllOn()

    RainbowSparkleUnicorn.Movement.setServoPulse(headServo, HeadPWM);
    RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, LeftArmPWM);
    RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, RightArmPWM);

    //loops
    loops.everyInterval(500, function () {
        heart.rotate(1);
        strip.show();
    })

    loops.everyInterval(100, function () {
        dealWithServoMovements();
    })
}

input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

function dealWithServoMovements() {

    if (joystickRY > 128 + 8) {
        RightArmPWM = RightArmPWM + 1;
    } else if (joystickRY < 120) {
        RightArmPWM = RightArmPWM - 1;
    }
    //{
    //     const pwm = Math.round(Math.map(RY, 0, 256, 426 - 240, 426));
    //     RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, pwm);
    // }

    led.plotBarGraph(joystickRY, 255)
    RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, RightArmPWM);
    RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, RightArmPWM);
    //}


    const pwm = Math.round(Math.map(joystickLX, 0, 255, 500, 278));
    RainbowSparkleUnicorn.Movement.setServoPulse(headServo, pwm);
}

function dealWithJoystickButton(value: JoystickButtons) {

    switch (value) {
        case JoystickButtons.BUTTON_B:
            radio.sendValue("VIBRATE", 500);
            break;
    }
}

radio.onReceivedValue(function (name: string, value: number) {


    switch (name) {
        case "PRESSED":
            dealWithJoystickButton(value);
            //
            break;
        case "GESTURE":
            //
            break;
        case "RX":
            joystickRX = value;
            //
            break;
        case "RY":
            joystickRY = value;
            //
            break;
        case "LX":
            joystickLX = value;
            //
            break;
        case "LY":
            //
            joystickLY = value;
            break;
    }
})


let mouth: neopixel.Strip = null
let heart: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
heart = strip.range(0, 12)
mouth = strip.range(12, 15)

startRobot()

