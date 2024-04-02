input.onButtonPressed(Button.A, function () {
    score = 0
    basic.showNumber(score)
})
let score = 0
hummingbird.startHummingbird()
score = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        score += 1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(score)
    }
})
