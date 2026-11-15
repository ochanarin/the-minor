let list: number[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Yveos.vy = -320
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
let Yveos: Sprite = null
Yveos = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 f 2 2 f 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 5 5 2 5 5 . . . . . . 
    . . . . 2 5 2 5 2 5 . . . . . . 
    . . . . 2 5 2 2 2 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(Yveos, 100, 0)
Yveos.ay = 320
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Yveos)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 . . 5 . 5 . . . . . . 
    . . . . 5 5 . 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 f 2 2 f 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
for (let value of list) {
	
}
