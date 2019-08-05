var app
var displacementSprite_2
function initPixi() {
    app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight
        }
    )
    document.body.appendChild( app.view )

    var image = new PIXI.Sprite.from( "images/t.jpg" )
    image.width = window.innerWidth
    image.height = window.innerHeight

    app.stage.addChild( image )

    displacementSprite = new PIXI.Sprite.from( "images/cloud.jpg" )
    displacementFilter = new PIXI.filters.DisplacementFilter( displacementSprite )
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    displacementSprite_2 = new PIXI.Sprite.from( "images/circle.jpg" )
    displacementFilter_2 = new PIXI.filters.DisplacementFilter( displacementSprite_2 )

    app.stage.addChild( displacementSprite, displacementSprite_2 )
    app.stage.filters = [ displacementFilter, displacementFilter_2 ]

    app.renderer.view.style.transform = 'scale( 1.02 )'
    displacementSprite.scale.x = 4
    displacementSprite.scale.y = 4

    animate()
}

function animate() {
    displacementSprite.x += 2
    displacementSprite.y += 2
    requestAnimationFrame( animate )
}

window.addEventListener( 'mousemove', ( e ) => {
    displacementSprite_2.x = e.clientX - ( displacementSprite_2.width / 2 )
    displacementSprite_2.y = e.clientY - ( displacementSprite_2.height / 2 )
} )

// initPixi()