enum JoystickButtons {
    //% block="THUMBSTICK LEFT"
    THUMBSTICK_LEFT = 0,
    //% block="THUMBSTICK RIGHT" 
    THUMBSTICK_RIGHT = 1,
    //% block="LEFT"
    BUTTON_LEFT = 2,
    //% block="RIGHT" 
    BUTTON_RIGHT = 3,
    //% block="BUTTON A"
    BUTTON_A = 4,
    //% block="BUTTON B" 
    BUTTON_B = 5,
    //% block="BUTTON AB"
    BUTTON_AB = 6,
}

const headServo = RainbowSparkleUnicorn.Movement.Pins.P15;
const leftArmServo = RainbowSparkleUnicorn.Movement.Pins.P14;
const rightArmServo = RainbowSparkleUnicorn.Movement.Pins.P13;

const leftEyeRed = RainbowSparkleUnicorn.Light.Pins.P2;
const leftEyeGreen = RainbowSparkleUnicorn.Light.Pins.P15;
const leftEyeBlue = RainbowSparkleUnicorn.Light.Pins.P1;

const rightEyeRed = RainbowSparkleUnicorn.Light.Pins.P0;
const rightEyeGreen = RainbowSparkleUnicorn.Light.Pins.P14;
const rightEyeBlue = RainbowSparkleUnicorn.Light.Pins.P3;