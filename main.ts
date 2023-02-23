input.onButtonPressed(Button.A, function () {
    Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.White))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.White))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
