input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.East)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.SmallDiamond)
