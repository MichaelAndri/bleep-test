def on_button_pressed_a():
    global isGamePlayed, seconds
    isGamePlayed = 1
    music.play(music.string_playable("C5 - - - - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.pause(5000)
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    seconds = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

seconds = 0
isGamePlayed = 0
while not (isGamePlayed):
    basic.show_string("Welcome test")
    basic.pause(2000)
    basic.show_string("Press A to start")

def on_forever():
    pass
basic.forever(on_forever)
