basic.showIcon(IconNames.Heart)
let Distance = sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)
basic.pause(500)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.clearScreen()
    Distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(Distance)
    basic.pause(100)
})
