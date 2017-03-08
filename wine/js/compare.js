//var vContainer = document.getElementById("compare-container"),
//vClipper = document.getElementById("clipper"),
//clippedDiv = vClipper.getElementsByClassName("compare-div")[0];
//
//function trackLocation(e) {
//  var rect = vContainer.getBoundingClientRect(),
//      position = ((e.pageX - rect.left) / vContainer.offsetWidth)*100;
//  if (position <= 100) { 
//    vClipper.style.width = position+"%";
//    clippedDiv.style.width = ((100/position)*100)+"%";
//    clippedDiv.style.zIndex = 3;
//	}
//}
//
//vContainer.addEventListener( "mousemove", trackLocation, false); 
//vContainer.addEventListener("touchstart",trackLocation,false);
//vContainer.addEventListener("touchmove",trackLocation,false);


var isResizing = false;
var handle = $('.handle');
var container = $('.container-us');
var leftPhoto = $('.left');
var rightPhoto = $('.right');

// Starting to resize
handle.on('mousemove', function(e) {
  isResizing = true;
});

var getPixelsFromLeft = function(event, container) {
  var pixelsFromLeft = event.clientX - $('.container-us').offset().left;
  
  pixelsFromLeft = pixelsFromLeft < 0 ? 0 : pixelsFromLeft;
  pixelsFromLeft = pixelsFromLeft > container.width() ? container.width() : pixelsFromLeft;
  
  return pixelsFromLeft;
};

var getPercentageFromLeft = function(pixelsFromLeft, container) {
  return pixelsFromLeft / container.width();
};

var getMargin = function(sidePercentage, container) {
  var containerWidth = container.width();

  return (containerWidth / (sidePercentage * containerWidth)) * (1 - sidePercentage);
};

var getPercentageOfContainer = function(el, container) {
  return el.width() / container.width();
};

var getHandleLeftPercentage = function(percentageFromLeft, handle, container) {
  var handlePercentage = getPercentageOfContainer(handle, container);
  
  var left = percentageFromLeft - (handlePercentage / 2);
  left = left < 0 ? 0 : left;
  left = left > 1 - handlePercentage ? 1 - handlePercentage : left;
  
  return left;
}

var resizePhoto = function(e) {
  var pixelsFromLeft = getPixelsFromLeft(e, container);
  var percentageFromLeft = getPercentageFromLeft(pixelsFromLeft, container);
  
  var textLeftPercentage = getMargin(percentageFromLeft, container);
  var textRightPercentage = getMargin(1 - percentageFromLeft, container);
  
  var handleLeftPercentage = getHandleLeftPercentage(percentageFromLeft, handle, container);
  
  $('.left').css('width', (percentageFromLeft * 100) + '%');
  $('.text--left').css('margin-left', (textLeftPercentage * 100) + '%');
  $('.text--right').css('margin-right', (textRightPercentage * 100) + '%');
  $('.handle').css('left',  handleLeftPercentage * 100 + '%');    
};

container.on('click', { animate: true }, resizePhoto);

$(document).on('mousemove', function(e) {
  // Moving the mouse but not attempting to resize
  if (!isResizing) {
    return;
  }

  resizePhoto(e);
}).on('mouseup', function() {
  // Done resizing
  isResizing = false;
});