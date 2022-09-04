
let LeftArmPWM = 339;
let RightArmPWM = 240;
let HeadPWM = 384;

let joystickRX = 128;
let joystickRY = 128;
let joystickLX = 128;
let joystickLY = 128;

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

    for (let i = 0; i < 16; i++) {
        RainbowSparkleUnicorn.Light.turnOn(i);
        basic.showNumber(i);
        basic.pause(5000);
        RainbowSparkleUnicorn.Light.turnOff(i);
    }
}

input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

function dealWithServoMovements() {

    let RightArmRange = 150;

    //right arm movement
    RightArmPWM = Math.round(Math.map(joystickRY, 0, 255, 240 - RightArmRange, 240 + RightArmRange));
    RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, RightArmPWM);

    let LeftArmRange = 150;

    //left arm movement
    //LeftArmPWM = Math.round(Math.map(joystickLY, 0, 255, 339 + LeftArmPWM, 339 - LeftArmPWM));
    //RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, LeftArmPWM);

    //head movement
    HeadPWM = Math.round(Math.map(joystickLX, 0, 255, 500, 278));
    RainbowSparkleUnicorn.Movement.setServoPulse(headServo, HeadPWM);
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


//loop for random muoth , eye colours
basic.forever(function () {
    basic.pause(randint(30, 60) * 1000);

    //https://makecode.microbit.org/18207-85042-97260-50754

    mouth.showColor(randint(0, 255));

})