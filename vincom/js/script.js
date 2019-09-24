$( document ).ready( ()=> {
	var c4k4 = document.getElementById( '_x34_c4k' )
	var bank = document.getElementById( 'bank' )
	var wall = document.getElementById( 'wall' )
	var twinTower = document.getElementById( 'twin-tower' )
	var playGround = document.getElementById( 'play-ground' )
	var headquater = document.getElementById( 'headquater' )
	var museum = document.getElementById( 'museum' )
	var show = document.getElementById( 'show' )
	var sidehouse = document.getElementById( 'side-house' )
	var church = document.getElementById( 'church' )
	var cornerhouse = document.getElementById( 'corner-house' )

	// setup scene
	var setupTL = new TimelineMax()
		setupTL
			.to( c4k4, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( museum, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( bank, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( wall, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( twinTower, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( headquater, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( playGround, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( show, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( sidehouse, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( church, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )
			.to( cornerhouse, 0, { transformStyle:"preserve-3d", scale:0, ease:Cubic.easeOut } )

	setTimeout(() => {
		var firstTL = new TimelineMax()
		firstTL
			.to( c4k4, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( museum, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( bank, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( wall, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( twinTower, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( headquater, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( playGround, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( show, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( sidehouse, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( church, 0.2, { scale:1, ease:Cubic.easeOut } )
			.to( cornerhouse, 0.2, { scale:1, ease:Cubic.easeOut } )
	}, 3000);
$(function () { // wait for document ready
	var flightpath = {
		entry : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 100,	y: -20},
					{x: 300,	y: 10}
				]
		},
		looping : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 510,	y: 60},
					{x: 620,	y: -60},
					{x: 500,	y: -100},
					{x: 380,	y: 20},
					{x: 500,	y: 60},
					{x: 580,	y: 20},
					{x: 620,	y: 15}
				]
		},
		leave : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 660,	y: 20},
					{x: 800,	y: 130},
					{x: $(window).width() + 300,	y: 1000},
				]
		}
	};
	// init controller
	var controller = new ScrollMagic.Controller();

	// create tween
	var tween = new TimelineMax()
		.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}))
		.play();

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger", duration: 5000, offset: 100
	})
					.setPin("#target")
					.setTween(tween)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	document.addEventListener( 'mousemove', (e) => {
		// console.log(e.clientX + ' , ' + e.clientY)
	} )


	
	// TweenMax.fromTo( c4k4, 1,
	// 	{ 
	// 		transformStyle:"preserve-3d",
	// 		scale:0,
	// 		transformOrigin:"75% 50%",
	// 		ease:Cubic.easeOut
	// 	},
	// 	{
	// 		transformStyle:"preserve-3d",
	// 		scale:1,
	// 		transformOrigin:"75% 50%",
	// 		ease:Cubic.easeOut
	// 	}
	// )

	


	// bank.addEventListener( 'mouseover', (e)=>{
	// 	TweenMax.to( bank, 0.3, { 
	// 		transformStyle:"preserve-3d",
	// 		scale:1.2,
	// 		transformOrigin:"75% 50%",
	// 		ease:Cubic.easeOut
	// 	} )
	// } )
	// bank.addEventListener( 'mouseleave', ()=> {
	// 	TweenMax.to( bank, 0.3, { 
	// 		transformStyle:"preserve-3d",
	// 		scale:1,
	// 		transformOrigin:"75% 50%",
	// 		ease:Cubic.easeOut
	// 	} )
	// } )
	bank.addEventListener( 'click', ()=>{
		console.log('asd')
	} )
})
} )