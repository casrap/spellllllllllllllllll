input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Right, 90)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.move(1)
})
let punt: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    punt = game.createSprite(randint(1, 5), randint(1, 5))
})
