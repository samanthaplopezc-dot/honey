controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d d . . . . d d . . . . . 
        . . . d d d d d d d d . . . . . 
        . . . d 4 4 4 4 4 4 d . . . . . 
        . . . 4 4 . . . . 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
    game.gameOver(true)
})
let mySprite2: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777999999999999999999eee999999999999999999999999999eee9999999999999999999999999999999555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777799999999999999999eee99999999999999999999999999eeee999999999999999999999999eee9995555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777799999999999999999eee99999999999999999999999999eeee999999999999999999999999eee9995555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777779999999999999999eee99999999999999999999999999eee9999999999999999999999995eee9995555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777779999999999999999eee99999999999999999999999999eee9999999999999999999999995eee9999555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777666777777799999999999999eee9999999999999999999999999eeee9999999999999999999999995eee9999555555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777666777777777799999999999eee9999999999999999999999999eeee9999999999999999999999999eee9999955555555555555555eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777666777777777777777799999eee9999999999999999999999999eee99999999999999999999999999eee99999995555555555555555eeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777779999eee9999999999999999999999999eee99999999999999999999999999eee55559999955555555555555eeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777777999eee9999999999999999999999999eee99999999999999999999999955eee55559999999955555555555eeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777766677777777799eee9999999999999999999999999eee99999999999999999999999555eee5555999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777766677777777799eee9999999999999999999999999eee99999999999999999999555555eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777755577766677777777799eee9999999999999999999999999eee99999999999999999555555555eeee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777755577777777777777799eee9999999999999999999999999eee99999999999999999555555559eeeee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777755577777777777777799eee9999999999999999999999999eee999999999999999995555599999eeee99955599999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777777779eee9999999999999999999999999eeee999999999999999999999999999eee99955599999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777777666eee9999999999999999999999999eeee999999999999999999999999999eee99955599999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777777666eee99999999999999999999999999eee999999999999999999999999999eee99955599999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777777777777777777666eee79999999999999999999999999eee999999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777666777755566677777777eee77999999999999999999999999eee999999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777666777755566677777777eee77999999999999999999999999eeee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777666777755566677777776eee77799999999999999999999999eeee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777775557777777777777776eee77799999999999999999999999eeee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777775557777777777777776eee777799999999999999999999999eee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777775557666777777777777eee777779999999999999999999999eee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77776666777777666777777777777eee777779999999999999999999999eee99999999999999999999999999eee99999999999995559999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77776666777777666777777777777eee777777999999999999999999999eee999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddd
    ddddddddddddddddddddeee77776666777777777777777777777eee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77999999999999999999999eee99999999999999999999999999eee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeee777777777777766677766677eee566777999999999999999999999eee99999999999999999999999999eee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777766667766666766677eee566777999999999999999999999eee9999999999999999999999999eeee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777766667776666777777eee666777999999999999999999999eee9999999999999999999999999eeee99999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777777766667776666555777eee775555999999999999999999999eee9999999999999999999999999eee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777666775557777777555777eee775555999999999999999999999eee9999999999999999999999999eee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddee555777777666775557777777555666eee775555999999999999999999999eee9999999999999999999999999eee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddee555777777666775557777766677666eee777799999999999999999999999eee999999999999999999999999eeee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddee555766677777777777777766677666eee77779999999999999999999999eeee999999999999999999999999eeee999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77766677777777777777766677777eee77779999999999999999999999eeee999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77766677766666677777777777666eee77779999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777766666677777777777666eee77779999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777777766655577777777777666eee77779999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77766677777755567777777666777eee77799999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77766677777755567777777666777eee77999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77766677777755567777777666777eee79999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777776667755577776667777777eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77777776667766677776667777779eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee77776666666666666666666677779eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee76666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeee6666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeee6666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeee6666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee66666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeee66666666666666666666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeee66666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeee66666666666669eee99999999999999999999999999eee9999999999999999999999999eee9999999999999999999999eeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    ddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5555555555555555555ddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
    dddddddddddddddddddddddddddddddddddddd44444444445555555555555555555555555555555555555555dd555555555555555dddddddd44444444455555555555555555555555555555555555555
    4444444444444444455555555555555555555555555555555555555555555555555555555555555555555555445555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555445555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555445555555555555555555555555555555555555555555544444444444555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555445555555555555555555555555555555555555555544444444444444444444444444444
    5555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444455555555555555555555555554444444444444444444444444444444444
    5555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f 1 f f f f . . . . 
    . . . . . . f 1 f f f f . . . . 
    . . . . . . e 1 e f f f . . . . 
    . . . . . . 1 1 1 f f . . . . . 
    . . . . . . . f f 1 1 f f f f 1 
    . . . . . . . f f 1 1 1 1 f 1 f 
    . . . . . . . 1 1 1 1 1 1 1 1 1 
    . . . . . . . 1 1 . . . 1 f 1 . 
    . . . . . . . f f . . . f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . . e d d d d d e . . . . . . 
        . . . e d f d f d e . . . . . . 
        . . . e d d d d d e . . . . . . 
        . . . e e e d e e e . . . . . . 
        . . . e 3 3 3 3 3 e . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . . d 3 3 3 d . . . . . . . 
        . . . . d 3 3 3 d . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        `, SpriteKind.Player)
    mySprite2.setVelocity(0, 100)
    mySprite2.setPosition(randint(8, 152), 0)
})
