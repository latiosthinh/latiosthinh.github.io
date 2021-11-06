// window.addEventListener("DOMMouseScroll", handleScroll);
// window.addEventListener("mousewheel", handleScroll);

function throttle (callback, limit) {
    let wait = false;                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call();           // Execute users function
            wait = true;               // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false;          // And allow future invocations
            }, limit);
        }
    }
}
// Usage Example:
// On scroll, allow function to run at most 1 time per 100ms

function wheelDistance(e) {
	if (!e) {
		e = window.event;
	}
	const w = e.wheelDelta,
		d = e.detail;
	if (d) {
		return -d / 3; // Firefox;
	}

	// IE, Safari, Chrome & other browsers
	return w / 120;
}

function handleScroll(e) {
	const delta = wheelDistance(e);
	const time = 1000;
	const distance = 200;

	$('html, body').stop( 100 ).animate({
		scrollTop: $(window).scrollTop()
					- (distance * delta)
	}, time);
}

window.addEventListener( "mousewheel", throttle( function(){
	const delta = wheelDistance();
	const time = 1000;
	const distance = 500;

	$('html, body').stop().animate({
		scrollTop: $(window).scrollTop()
					- (distance * delta)
	}, time);
}, 100));