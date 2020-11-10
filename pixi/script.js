var centerX = window.innerWidth / 2
var centerY = window.innerHeight / 2

var app
var displacementSprite_2
var imgCanvas_1
var j_canvas, a_canvas, y1_canvas, y2_canvas, s1_canvas, s2_canvas,
    n1_canvas, g_canvas, u_canvas, y3_canvas, e_canvas, n2_canvas,
    rect1, rect2, rect3, rect4, rect5,
    front_canvas, end_canvas, dev_canvas, eloper_canvas,
    projects_canvas, p1_canvas, p2_canvas, p3_canvas, p4_canvas, p5_canvas,
    contact_canvas, c1_canvas, c2_canvas, c3_canvas, c4_canvas, c5_canvas

// cursor
var circle_1, circle_2
var purple    = 0xA90083,
    blue      = 0x0069AE,
    lightblue = 0x56bcff,
    orange    = 0xEB9516,
    linkcolor = 0x866555,
    _color    = 0x767676

// calculate vars
var totalWidth_1, totalWidth_2
var space_1, space_2

var wrapper = document.getElementsByTagName( 'canvas' )[0]
var cursor_1 = document.getElementById( 'circle_1' )
var cursor_2 = document.getElementById( 'circle_2' )

var scrollSpan = document.getElementById( 'scroll' )

function initPixi() {
    app = new PIXI.Application(
        {
            width          : window.innerWidth,
            height         : window.innerHeight,
            autoResize     : true,
            backgroundColor: 0x000000,
            resolution     : devicePixelRatio,
            antialias      : true
        }
    )
    document.body.appendChild( app.view )

    // var image = document.getElementsByClassName( 'img1' )
    
    // let imgSrc             = image[ 0 ].getAttribute( 'src' )
    //     imgCanvas_1        = new PIXI.Sprite.from( imgSrc )
    //     imgCanvas_1.width  = window.innerWidth
    //     imgCanvas_1.height = window.innerHeight

    // app.stage.addChild( imgCanvas_1 )
    
    const style = new PIXI.TextStyle( {
        fontFamily     : 'Exo',
        fontSize       : 300,
        fontWeight     : 'bold',
        stroke         : '#ffffff',
        strokeThickness: 10,
        fill           : [ '#000000' ],
    } )
    const style_2 = new PIXI.TextStyle( {
        fontFamily     : 'Exo',
        fontSize       : 300,
        fontWeight     : 'bold',
        fill           : [ '#ffffff' ],
    } )
    const style_project = new PIXI.TextStyle( {
        fontFamily     : 'Exo',
        fontSize       : 30,
        fontWeight     : 'bold',
        fill           : [ '#ffffff' ],
    } )
    const style_contact = new PIXI.TextStyle( {
        fontFamily     : 'Exo',
        fontSize       : 30,
        fontWeight     : 'bold',
        fill           : [ '#000000' ],
    } )
    rect1 = new PIXI.Graphics()
    rect1.beginFill( 0xFFFFFF )
    rect1.drawRect( 0, 0, window.innerWidth, window.innerHeight )

    let j          = document.getElementById( 'j' ).innerText
        j_canvas   = new PIXI.Text( j , style )
        j_canvas.x = centerX - ( j_canvas.width / 2 )
        j_canvas.y = centerY - ( j_canvas.height / 2 )
        
    
    let a          = document.getElementById( 'a' ).innerText
        a_canvas   = new PIXI.Text( a , style )
        a_canvas.y = j_canvas.y

    let y1          = document.getElementById( 'y1' ).innerText
        y1_canvas   = new PIXI.Text( y1 , style )
        y1_canvas.y = j_canvas.y

    let s1          = document.getElementById( 's1' ).innerText
        s1_canvas   = new PIXI.Text( s1 , style )
        s1_canvas.y = j_canvas.y

    let s2          = document.getElementById( 's2' ).innerText
        s2_canvas   = new PIXI.Text( s2 , style )
        s2_canvas.y = j_canvas.y

    let y2          = document.getElementById( 'y2' ).innerText
        y2_canvas   = new PIXI.Text( y2 , style )
        y2_canvas.y = j_canvas.y

    totalWidth_1 = ( j_canvas.width + a_canvas.width + y1_canvas.width + y2_canvas.width + s1_canvas.width + s2_canvas.width )
    space_1      = ( window.innerWidth - totalWidth_1 ) / 7
    
    let n1              = document.getElementById( 'n1' ).innerText
        n1_canvas       = new PIXI.Text( n1 , style_2 )
        n1_canvas.y     = j_canvas.y
        n1_canvas.alpha = 0.5
    
    let g              = document.getElementById( 'g' ).innerText
        g_canvas       = new PIXI.Text( g , style_2 )
        g_canvas.y     = j_canvas.y
        g_canvas.alpha = 0.5

    let u              = document.getElementById( 'u' ).innerText
        u_canvas       = new PIXI.Text( u , style_2 )
        u_canvas.y     = j_canvas.y
        u_canvas.alpha = 0.5

    let y3              = document.getElementById( 'y3' ).innerText
        y3_canvas       = new PIXI.Text( y3 , style_2 )
        y3_canvas.y     = j_canvas.y
        y3_canvas.alpha = 0.5

    let e              = document.getElementById( 'e' ).innerText
        e_canvas       = new PIXI.Text( e , style_2 )
        e_canvas.y     = j_canvas.y
        e_canvas.alpha = 0.5

    let n2              = document.getElementById( 'n2' ).innerText
        n2_canvas       = new PIXI.Text( n2 , style_2 )
        n2_canvas.y     = j_canvas.y
        n2_canvas.alpha = 0.5

    totalWidth_2 = ( n1_canvas.width + g_canvas.width + u_canvas.width + y3_canvas.width + e_canvas.width + n2_canvas.width )
    space_2      = ( window.innerWidth - totalWidth_2 ) / 7

    rect2 = new PIXI.Graphics()
    rect2.beginFill( 0x000000 )
    rect2.drawRect( 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2 )

    rect3 = new PIXI.Graphics()
    rect3.beginFill( 0xFFFFFF )
    rect3.drawRect( 0, 0, window.innerWidth, window.innerHeight / 2 )

    let front               = document.getElementById( 'front' ).innerText
        front_canvas        = new PIXI.Text( front, style )
        front_canvas.x      = -window.innerWidth * 1.5
        front_canvas.y      = centerY / 2 - front_canvas.height / 2
        front_canvas.width  = window.innerWidth * 1.5
        front_canvas.height = window.innerHeight / 2

    let dev               = document.getElementById( 'dev' ).innerText
        dev_canvas        = new PIXI.Text( dev, style_2 )
        dev_canvas.x      = window.innerWidth * 1.5
        dev_canvas.y      = centerY / 2 + dev_canvas.height / 2
        dev_canvas.width  = window.innerWidth * 1.5
        dev_canvas.height = window.innerHeight / 2

    rect4 = new PIXI.Graphics()
    rect4.beginFill( 0x000000 )
    rect4.drawRect( 0, 0, window.innerWidth, window.innerHeight )
    
    // projects
    let projects              = document.getElementById( 'projects' ).innerText
        projects_canvas       = new PIXI.Text( projects, style )
        projects_canvas.angle = 90
        projects_canvas.x     = projects_canvas.height / 1.2

    let p1                    = document.getElementById( 'p1' ).innerText
        p1_canvas             = new PIXI.Text( p1, style_project )
        p1_canvas.interactive = true
        p1_canvas.click       = ( e ) => {
            window.location.href = 'http://wineagency.vn/'
        }
    
    let p2                    = document.getElementById( 'p2' ).innerText
        p2_canvas             = new PIXI.Text( p2, style_project )
        p2_canvas.x           = ( window.innerWidth - projects_canvas.height ) / 2 + p2_canvas.width / 2
        p2_canvas.interactive = true
        p2_canvas.click       = ( e ) => {
            window.location.href = 'http://brandbricks.riobook.vn'
        }

    let p3                    = document.getElementById( 'p3' ).innerText
        p3_canvas             = new PIXI.Text( p3, style_project )
        p3_canvas.interactive = true
        p3_canvas.click       = ( e ) => {
            window.location.href = 'https://reallink.com.au/'
        }

    let p4                    = document.getElementById( 'p4' ).innerText
        p4_canvas             = new PIXI.Text( p4, style_project )
        p4_canvas.interactive = true
        p4_canvas.click       = ( e ) => {
            window.location.href = 'https://snkrvn.com/'
        }

    let p5                    = document.getElementById( 'p5' ).innerText
        p5_canvas             = new PIXI.Text( p5, style_project )
        p5_canvas.interactive = true
        p5_canvas.click       = ( e ) => {
            window.location.href = 'https://hailecao.com/'
        }

        p1_canvas.x = p2_canvas.x
        p3_canvas.x = p2_canvas.x
        p4_canvas.x = p2_canvas.x
        p5_canvas.x = p2_canvas.x

    rect5 = new PIXI.Graphics()
    rect5.beginFill( 0xFFFFFF )
    rect5.drawRect( 0, 0, window.innerWidth, window.innerHeight )

    // contact
    let contact              = document.getElementById( 'contact' ).innerText
        contact_canvas       = new PIXI.Text( contact, style )
        contact_canvas.angle = 270
        contact_canvas.x     = window.innerWidth - contact_canvas.height / 1.2
        // contact_canvas.y     =  window.innerHeight

    let c1        = document.getElementById( 'c1' ).innerText
        c1_canvas = new PIXI.Text( c1, style_contact )
    
    let c2                    = document.getElementById( 'c2' ).innerText
        c2_canvas             = new PIXI.Text( c2, style_contact )
        c2_canvas.x           = ( window.innerWidth - contact_canvas.height ) / 2 - c2_canvas.width / 2
        c2_canvas.interactive = true
        c2_canvas.click       = ( e ) => {
            window.location.href = 'window.location.href = "mailto:thinhnq.91@gmail.com?subject=I%20love%20you&body=Say%20somthing%20to%20me..."'
        }

    let c3                    = document.getElementById( 'c3' ).innerText
        c3_canvas             = new PIXI.Text( c3, style_contact )
        c3_canvas.interactive = true
        c3_canvas.click       = ( e ) => {
            window.location.href = 'https://www.facebook.com/thomas.4542'
        }

    let c4                    = document.getElementById( 'c4' ).innerText
        c4_canvas             = new PIXI.Text( c4, style_contact )
        c4_canvas.interactive = true
        c4_canvas.click       = ( e ) => {
            window.location.href = 'http://latiosthinh.github.io/'
        }

    let c5                    = document.getElementById( 'c5' ).innerText
        c5_canvas             = new PIXI.Text( c5, style_contact )
        c5_canvas.interactive = true
        c5_canvas.click       = ( e ) => {
            window.location.href = 'skype:latiosthinh?chat'
        }

        c1_canvas.x = c2_canvas.x
        c3_canvas.x = c2_canvas.x
        c4_canvas.x = c2_canvas.x + c3_canvas.width + 50
        c5_canvas.x = c2_canvas.x + c3_canvas.width + c4_canvas.width + 100

    circle_1 = new PIXI.Graphics()
    circle_1.beginFill( 0x767676 )
    circle_1.drawCircle( 0, 0, 7 )
    circle_1.endFill()
    // circle_1.alpha = 0.5

    circle_2 = new PIXI.Graphics()
    circle_2.lineStyle( 1, 0x767676, 1 )
    circle_2.beginFill( 0x0000FF, 0 )
    circle_2.drawCircle( 0, 0, 15 )
    circle_2.endFill()
    
    app.stage.addChild( 
        rect1,
        j_canvas, a_canvas, y1_canvas, s1_canvas, s2_canvas, y2_canvas,
        n1_canvas, g_canvas, u_canvas, y3_canvas, e_canvas, n2_canvas,    
        rect2, rect3,
        front_canvas, dev_canvas,
        rect4,
        projects_canvas, p1_canvas, p2_canvas, p3_canvas, p4_canvas, p5_canvas,
        rect5,
        contact_canvas, c1_canvas, c2_canvas, c3_canvas, c4_canvas, c5_canvas,
        circle_1, 
        // circle_2
    )

    displacementSprite = new PIXI.Sprite.from( "images/cloud.jpg" )
    displacementFilter = new PIXI.filters.DisplacementFilter( displacementSprite )
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    displacementSprite_2 = new PIXI.Sprite.from( "images/circle.jpg" )
    displacementFilter_2 = new PIXI.filters.DisplacementFilter( displacementSprite_2 )

    // app.stage.addChild( displacementSprite, displacementSprite_2 )
    // app.stage.filters = [ displacementFilter, displacementFilter_2 ]

    app.stage.addChild( displacementSprite_2 )
    app.stage.filters = [ displacementFilter_2 ]

    app.renderer.view.style.transform = 'scale( 1.02 )'
    displacementSprite.scale.x = 4
    displacementSprite.scale.y = 4

    const getMousePosition = () => app.renderer.plugins.interaction.mouse.global
    let mousePos

    app.ticker.add( () => {
        mousePos = getMousePosition()
        circle_1.x = mousePos.x
        circle_1.y = mousePos.y
        // circle_2.x = mousePos.x
        // circle_2.y = mousePos.y

        p1_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p1_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p2_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p2_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p3_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p3_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p4_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p4_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p5_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        p5_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c2_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( orange )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c2_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c3_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( blue )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c3_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c4_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( purple )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c4_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c5_canvas.mouseover = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( lightblue )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
        c5_canvas.mouseout = ( e ) => {
            circle_1.clear()
            circle_1.beginFill( _color )
            circle_1.drawCircle( 0, 0, 7 )
            circle_1.endFill()
        }
    } )

    animate()
}



window.addEventListener( 'resize', () => {
    centerX = window.innerWidth / 2
    centerY = window.innerHeight / 2
    app.renderer.resize( window.innerWidth, window.innerHeight )
} )

function animate() {
    // displacementSprite.x += 2
    // displacementSprite.y += 2
    // requestAnimationFrame( animate )
}

window.addEventListener( 'mousemove', ( e ) => {
    displacementSprite_2.x = e.clientX - ( displacementSprite_2.width / 2 )
    displacementSprite_2.y = e.clientY - ( displacementSprite_2.height / 2 )

    cursor_1.style.top = ( e.clientY - 7 ) + 'px'
    cursor_1.style.left = ( e.clientX - 7 ) + 'px'

    setTimeout( () => {
        cursor_2.style.top = ( e.clientY - 13 ) + 'px'
        cursor_2.style.left = ( e.clientX - 13 ) + 'px'
    }, 100 );
    
    // circle_1.position.x = e.clientX
    // circle_1.position.y = e.clientY

    // imgCanvas_1.x = e.clientX - ( displacementSprite_2.width / 2 )
    // imgCanvas_1.y = e.clientY - ( displacementSprite_2.height / 2 )
} )

initPixi()

// setup
TweenMax.from( j_canvas, 3, { alpha: 0 } )

var tl_frame_1 = new TimelineMax()
    tl_frame_1.pause()

    tl_frame_1
            .to( scrollSpan, 3, { autoAlpha: 0 } )
            .to( j_canvas, 5, { x: space_1 , ease: 'Linear:easeNone' } )
            .fromTo( a_canvas, 5, { x: window.innerWidth, alpha: 0, ease: 'Linear:easeNone' }, { x: j_canvas.width + space_1 * 2, alpha: 1, ease: 'Linear:easeNone' }, 2 )
            .fromTo( y1_canvas, 5, { x: window.innerWidth, alpha: 0, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + space_1 * 3, alpha: 1, ease: 'Linear:easeNone' }, 4 )
            .fromTo( s1_canvas, 5, { x: window.innerWidth, alpha: 0, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + space_1 * 4, alpha: 1, ease: 'Linear:easeNone' }, 6 )
            .fromTo( s2_canvas, 5, { x: window.innerWidth, alpha: 0, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + s1_canvas.width + space_1 * 5, alpha: 1, ease: 'Linear:easeNone' }, 8 )
            .fromTo( y2_canvas, 5, { x: window.innerWidth, alpha: 0, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + s1_canvas.width + s2_canvas.width + space_1 * 6, alpha: 1, ease: 'Linear:easeNone' }, 10 )

            .to( rect1, 5, { x: window.innerWidth, ease: 'Linear:easeNone' }, 12 )

            .fromTo( n2_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + s1_canvas.width + s2_canvas.width + space_1 * 6, ease: 'Linear:easeNone' }, 18 )
            .fromTo( e_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + s1_canvas.width + space_1 * 5, ease: 'Linear:easeNone' }, 20 )
            .fromTo( y3_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + y1_canvas.width + space_1 * 4, ease: 'Linear:easeNone' }, 22 )
            .fromTo( u_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: j_canvas.width + a_canvas.width + space_1 * 3, ease: 'Linear:easeNone' }, 24 )
            .fromTo( g_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: j_canvas.width + space_1 * 2, ease: 'Linear:easeNone' }, 26 )
            .fromTo( n1_canvas, 5, { x: - window.innerWidth / 4, ease: 'Linear:easeNone' }, { x: space_1, ease: 'Linear:easeNone' }, 28 )
            // 45
            .to( j_canvas, 2, { y: window.innerHeight / 2 - j_canvas.height, ease: 'Linear:easeNone' }, 32 )
            .to( a_canvas, 2, { y: window.innerHeight / 2 - a_canvas.height, ease: 'Linear:easeNone' }, 34 )
            .to( y1_canvas, 2, { y: window.innerHeight / 2 - y1_canvas.height, ease: 'Linear:easeNone' }, 36 )
            .to( s1_canvas, 2, { y: window.innerHeight / 2 - s1_canvas.height, ease: 'Linear:easeNone' }, 38 )
            .to( s2_canvas, 2, { y: window.innerHeight / 2 - s2_canvas.height, ease: 'Linear:easeNone' }, 40 )
            .to( y2_canvas, 2, { y: window.innerHeight / 2 - y2_canvas.height, ease: 'Linear:easeNone' }, 42 )
            // 18
            .to( n1_canvas, 2, { y: window.innerHeight / 2 , alpha: 1, ease: 'Linear:easeNone' }, 32 )
            .to( g_canvas, 2, { y: window.innerHeight / 2, alpha: 1, ease: 'Linear:easeNone' }, 34 )
            .to( u_canvas, 2, { y: window.innerHeight / 2, alpha: 1, ease: 'Linear:easeNone' }, 36 )
            .to( y3_canvas, 2, { y: window.innerHeight / 2, alpha: 1, ease: 'Linear:easeNone' }, 38 )
            .to( e_canvas, 2, { y: window.innerHeight / 2, alpha: 1, ease: 'Linear:easeNone' }, 40 )
            .to( n2_canvas, 2, { y: window.innerHeight / 2, alpha: 1, ease: 'Linear:easeNone' }, 42 )
            // 18
            .fromTo( rect3, 5, { x: -window.innerWidth, ease: 'Linear:easeNone' }, { x: 0, ease: 'Linear:easeNone' }, 45 )
            .fromTo( rect2, 5, { x: window.innerWidth, ease: 'Linear:easeNone' }, { x: 0, ease: 'Linear:easeNone' }, 45 )
            // developer
            .to( front_canvas, 15, { x: window.innerWidth * 1.5, ease: 'Linear:easeNone'  }, 48 )
            .to( dev_canvas, 15, { x: -window.innerWidth * 1.5, ease: 'Linear:easeNone'  }, 48 )
            // 63
            .fromTo( rect4, 3, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: 0, ease: 'Linear:easeNone' } )
            // 66
            // projects
            .fromTo( projects_canvas, 45, { y: -window.innerHeight - projects_canvas.width, ease: 'Linear:easeNone' }, { y: window.innerHeight, ease: 'Linear:easeNone' }, 65 )
            .fromTo( p1_canvas, 55, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: -window.innerHeight, ease: 'Linear:easeNone' }, 65 )
            .fromTo( p2_canvas, 55, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: -window.innerHeight, ease: 'Linear:easeNone' }, 68 )
            .fromTo( p3_canvas, 55, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: -window.innerHeight, ease: 'Linear:easeNone' }, 71 )
            .fromTo( p4_canvas, 55, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: -window.innerHeight, ease: 'Linear:easeNone' }, 74 )
            .fromTo( p5_canvas, 55, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: -window.innerHeight, ease: 'Linear:easeNone' }, 77 )
            // 132
            // about
            .fromTo( rect5, 3, { y: -window.innerHeight, ease: 'Linear:easeNone' }, { y: 0, ease: 'Linear:easeNone' }, 90 )
            // 135
            .fromTo( contact_canvas, 10, { y: window.innerHeight + contact_canvas.width, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2 + contact_canvas.width / 2, ease: 'Linear:easeNone' }, 93 )
            .fromTo( c1_canvas, 5, { y: -window.innerHeight, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2 - 70, ease: 'Linear:easeNone' }, 93 )
            .fromTo( c2_canvas, 5, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2, ease: 'Linear:easeNone' }, 94 )
            .fromTo( c3_canvas, 5, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2 + 70, ease: 'Linear:easeNone' }, 95 )
            .fromTo( c4_canvas, 5, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2 + 70, ease: 'Linear:easeNone' }, 96 )
            .fromTo( c5_canvas, 5, { y: window.innerHeight, ease: 'Linear:easeNone' }, { y: window.innerHeight / 2 + 70, ease: 'Linear:easeNone' }, 97 )


    tl_frame_1.timeScale( 1 )
document.addEventListener( 'mousewheel', ( e ) => {
    var progress = tl_frame_1.progress()
    var progressStep
    var newTime
    
    progressStep = ( e.deltaY < 0 || e.deltaY > 0 ) ? e.deltaY / 1000 : 0
    newTime = ( progress + progressStep ) * tl_frame_1.duration()
    
    newTime = newTime < 0 ? 0 : newTime
    // newTime =  newTime < 0.05 ? 0 : ( progress + progressStep ) * tl_frame_1.duration()
    tl_frame_1.tweenTo( newTime, { ease: Strong.easeOut } )
} )

// window.addEventListener( 'resize', () => {
//     centerX = window.innerWidth / 2
//     centerY = window.innerHeight / 2
//     app.renderer.resize( window.innerWidth, window.innerHeight )
// } )