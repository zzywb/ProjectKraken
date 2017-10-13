'use strict';

var delta;

var fps = 0;
var fpsUpdateInterval = 1000;
var fpsTimer;
var frames = 0;

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame   || 
    window.mozRequestAnimationFrame      || 
    window.oRequestAnimationFrame        || 
    window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(function(){
           
            callback(+performance.now());

        }, 1000 / 60);
    };
})();

var lastRun;
(function(window, document) {

    var canvas   = document.getElementById('canvas'),
        width        = canvas.width,
        height       = canvas.height,
        game_running = true,
        show_fps     = true;

    /**
     * Determine if the canvas is supported, get the context and warn the user 
     * otherwise.
     */
    if(canvas.getContext) {

        var ctx = canvas.getContext('2d');

    }
    else {

        // TODO: Design error message
        alert('Your browser does not support the html5 canvas!');

    }
    
    function showFPS() {

        ctx.fillStyle = 'Black';
        ctx.font = 'normal 16pt Arial';
        ctx.fillText('FPS: ' + fps.toFixed(2), 10, 26);

    }

    function FPS(delta) {

        fpsTimer += delta;
        console.log(fpsTimer + " " + delta);
        frames++;
        if(fpsTimer > fpsUpdateInterval) {
            fps = frames / fpsTimer;
            fpsTimer -= fpsUpdateInterval;
        }

    }

    (function gameLoop(){
        
        // Compute the time it took to render the last frame
        delta = (performance.now() - lastRun);
        
        FPS(delta);

        // Clear screen
        ctx.clearRect(0, 0, width, height);

        if(show_fps) showFPS();

        if(game_running) requestAnimFrame(gameLoop);

        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 50, 50);

        lastRun = performance.now();

    })();

})(this, this.document);