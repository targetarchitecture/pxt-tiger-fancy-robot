
let LeftArmPWM = 339;
let RightArmPWM = 240;
let HeadPWM = 384;

let joystickRX = 128;
let joystickRY = 128;
let joystickLX = 128;
let joystickLY = 128;

RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P3, function () {
    basic.showIcon(IconNames.Tortoise)

    RainbowSparkleUnicorn.Sound.setVolume(10)
    RainbowSparkleUnicorn.Sound.playTrack(1)
})

RainbowSparkleUnicorn.Touch.onReleased(RainbowSparkleUnicorn.Touch.Pins.P0, function () {
    basic.showIcon(IconNames.Asleep)

    RainbowSparkleUnicorn.Sound.setVolume(10)
    RainbowSparkleUnicorn.Sound.playTrack(2)
})

function startRobot() {
    RainbowSparkleUnicorn.start()
    radio.setGroup(76)
    radio.setTransmitPower(7)
    heart.setBrightness(50)
    heart.showRainbow(1, 360)
    mouth.setBrightness(50)
    mouth.showColor(neopixel.colors(NeoPixelColors.Indigo))

    RainbowSparkleUnicorn.Light.turnAllOn();

    RainbowSparkleUnicorn.Sound.setVolume(10)
    RainbowSparkleUnicorn.Sound.playTrack(3)

    RainbowSparkleUnicorn.Movement.setServoPulse(headServo, HeadPWM);
    RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, LeftArmPWM);
    RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, RightArmPWM);

    //loops
    loops.everyInterval(500, function () {
        heart.rotate(1);
        strip.show();
    })

    loops.everyInterval(100, function () {
        dealWithServoMovementsV2();
    })

}

input.onButtonPressed(Button.A, function () {
    radio.sendString("VIBRATE")
})

function dealWithServoMovementsV1() {

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

function dealWithServoMovementsV2() {

    const deadZone = 8;
    const delta = 10;
    //let inDeadZone = true;

    //right arm movement
    if (joystickLY < 128 - deadZone) {
        //not in dead dead zone
        RightArmPWM = RightArmPWM - (joystickLY / delta);
        //inDeadZone = false;
    }

    if (joystickLY > 128 + deadZone) {
        //not in dead dead zone
        RightArmPWM = RightArmPWM + (joystickLY / delta);
        //inDeadZone = false;
    }

    //boundaries
    RightArmPWM = Math.constrain(RightArmPWM, 240, 426);

    //if (inDeadZone = false) {
        RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, RightArmPWM);
    // } else {
    //     RainbowSparkleUnicorn.Movement.setServoPulse(rightArmServo, 240);
    // }

    //inDeadZone = true;

    //left arm movement
    if (joystickRY < 128 - deadZone) {
        //not in dead dead zone
        LeftArmPWM = LeftArmPWM - (joystickRY / delta);
        //inDeadZone = false;
    }

    if (joystickRY > 128 + deadZone) {
        //not in dead dead zone
        LeftArmPWM = LeftArmPWM + (joystickRY / delta);

        //inDeadZone = false;
    }

//boundaries
    LeftArmPWM = Math.constrain(LeftArmPWM, 155, 339);

    //if (inDeadZone = false) {
        RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, LeftArmPWM);
    // } else {
    //     RainbowSparkleUnicorn.Movement.setServoPulse(leftArmServo, 339);
    // }

    //head movement
    let NewHeadPWM = Math.round(Math.map(joystickLX, 0, 255, 500, 278));

    if (NewHeadPWM != HeadPWM) {
        RainbowSparkleUnicorn.Movement.setServoPulse(headServo, HeadPWM);
    }

    HeadPWM = NewHeadPWM;
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

    //basic.pause(randint(30, 60) * 1000);
    basic.pause(10 * 1000);

    let col = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))

    mouth.showColor(col);
    mouth.show();

    let rnd = randint(0, 5)

    switch (rnd) {
        case 0:
            RainbowSparkleUnicorn.Light.turnOn(leftEyeRed)
            break;
        case 1:
            RainbowSparkleUnicorn.Light.turnOn(leftEyeGreen)
            break;
        case 2:
            RainbowSparkleUnicorn.Light.turnOn(leftEyeBlue)
            break;
        case 3:
            RainbowSparkleUnicorn.Light.turnOn(rightEyeRed)
            break;
        case 4:
            RainbowSparkleUnicorn.Light.turnOn(rightEyeGreen)
            break;
        case 5:
            RainbowSparkleUnicorn.Light.turnOn(rightEyeBlue)
            break;
    }

    rnd = Math.randomRange(0, 5)


    switch (rnd) {
        case 0:
            RainbowSparkleUnicorn.Light.turnOff(leftEyeRed)
            break;
        case 1:
            RainbowSparkleUnicorn.Light.turnOff(leftEyeGreen)
            break;
        case 2:
            RainbowSparkleUnicorn.Light.turnOff(leftEyeBlue)
            break;
        case 3:
            RainbowSparkleUnicorn.Light.turnOff(rightEyeRed)
            break;
        case 4:
            RainbowSparkleUnicorn.Light.turnOff(rightEyeGreen)
            break;
        case 5:
            RainbowSparkleUnicorn.Light.turnOff(rightEyeBlue)
            break;
    }

})
