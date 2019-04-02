var keU = new KeyboardEvent("keyup",
{
    altKey: false,
    bubbles: true,
    cancelBubble: false,
    cancelable: true,
    charCode: 0,
    code: "ArrowUp",
    composed: true,
    ctrlKey: false,
    currentTarget: document,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 3,
    isComposing: false,
    isTrusted: true,
    key: "ArrowUp",
    keyCode: 38,
    location: 0,
    metaKey: false,
//     path: (4) [body#t.offline.arcade-mode, html, document, Window],
    repeat: false,
    returnValue: true,
    shiftKey: false,
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false},
//     srcElement: body#t.offline.arcade-mode,
//     target: body#t.offline.arcade-mode,
//     timeStamp: 1267557.6200000006,
    type: "keyup",
//     view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …},
    which: 38
});

var keD = new KeyboardEvent("keydown",
{
    altKey: false,
    bubbles: true,
    cancelBubble: false,
    cancelable: true,
    charCode: 0,
    code: "ArrowUp",
    composed: true,
    ctrlKey: false,
    currentTarget: document,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 3,
    isComposing: false,
    isTrusted: true,
    key: "ArrowUp",
    keyCode: 38,
    location: 0,
    metaKey: false,
//     path: (4) [body#t.offline.arcade-mode, html, document, Window],
    repeat: false,
    returnValue: true,
    shiftKey: false,
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false},
//     srcElement: body#t.offline.arcade-mode,
//     target: body#t.offline.arcade-mode,
//     timeStamp: 1267557.6200000006,
    type: "keydown",
//     view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …},
    which: 38
});

var keDd = new KeyboardEvent("keydown",
{
    altKey: false,
    bubbles: true,
    cancelBubble: false,
    cancelable: true,
    charCode: 0,
    code: "ArrowDown",
    composed: true,
    ctrlKey: false,
    currentTarget: document,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 3,
    isComposing: false,
    isTrusted: true,
    key: "ArrowDown",
    keyCode: 38,
    location: 0,
    metaKey: false,
//     path: (4) [body#t.offline.arcade-mode, html, document, Window],
    repeat: false,
    returnValue: true,
    shiftKey: false,
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false},
//     srcElement: body#t.offline.arcade-mode,
//     target: body#t.offline.arcade-mode,
//     timeStamp: 1267557.6200000006,
    type: "keydown",
//     view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …},
    which: 38
});


//window.dispatchEvent(ke);
document.dispatchEvent(keD);
document.dispatchEvent(keU);

var jump = function() {
    document.dispatchEvent(keD);
//     document.dispatchEvent(keU);
}

var duck = function() {
    document.dispatchEvent(keDd);
}

// window.setInterval(jump, 900);

var canvas = document.querySelector(".runner-canvas")
var ctx = canvas.getContext('2d');

var spotCactus = function(ctx){
    var pixels = ctx.getImageData(580 , 90, 1, 35).data
    var sum = pixels.reduce( (prev, curr) => prev+curr, 0)
    return sum
}

var spotBird = function(ctx){
    var pixels = ctx.getImageData(580 , 90, 2, 10).data
    var sum = pixels.reduce( (prev, curr) => prev+curr, 0)
    return sum
}

var delay = 1290;
var prevJump = Date.now();

window.clearInterval(i);
var i = window.setInterval(function(){
    var cactus = spotCactus(ctx);
    if (cactus > 3000) {
// 	   console.log("incomming cactus, at ", Date.now());
 	   //console.log("jump in ", delay)
 	   var thisJump = Date.now();
 	   console.log("DeltaJump:", thisJump-prevJump);
 	   prevJump = thisJump;
	   window.setTimeout(jump, delay)
    }
//     if(spotBird(ctx) > 100){
//         window.setTimeout(duck, delay);
//         console.log("incomming bird, to duck for ")
//     }
}, 5)

var acceleration = 1.0;
window.clearInterval(j);
var j = window.setInterval(function(){
   delay *= 0.9085;
//    console.log("Delay:", delay)
}, 10000)

// var origGameover = Runner.prototype.gameOver
// Runner.prototype.gameOver = function(e) {
//     console.log("Died at", Date.now() );
//     Runner.prototype.gameOver = origGameover;
//     Runner.prototype.gameOver(e);
// }

