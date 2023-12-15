enum RadioMessage {
    message1 = 49434,
    Start_Game = 59346,
    FailRecieved = 3868
}
input.onButtonPressed(Button.A, function () {
    isGamePlayed = 1
    basic.pause(5000)
    music.play(music.stringPlayable("C5 - B - A B - - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("5")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("4")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("3")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("2")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("1")
    basic.clearScreen()
    seconds = 0
    Level = 10000
    for (let index = 0; index < 10; index++) {
        radio.sendNumber(Level)
        basic.pause(Level)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        Level = Level - 1000
        if (isGamePlayed == 0) {
            break;
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Level Failed") {
        isGamePlayed = 0
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    }
})
let Level = 0
let seconds = 0
let isGamePlayed = 0
radio.setGroup(255)
radio.setTransmitPower(7)
while (!(isGamePlayed)) {
    basic.showString("A = start")
}
basic.clearScreen()
