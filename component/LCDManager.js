LCDManager = function(){
    prism.core.abstractImplementation.call(this);
    this.initializable = true;
    this.initialized = false;

};
LCDManager.prototype = Object.create(prism.core.abstractImplementation.prototype);
LCDManager.prototype.constructor = LCDManager;

LCDManager.prototype.initialize = function(){
    var mraa = require('mraa');
    var version = mraa.getVersion();

    if (version >= 'v0.6.1') {
        console.log('mraa version (' + version + ') ok');
    }
    else {
        console.log('meaa version(' + version + ') is old - this code may not work');
    }
    
    this.i2c = require('./i2c');
    this.display = new i2c.LCD(0);
};
LCDManager.prototype.print = function(msg){
    
};
LCDManager.prototype.handle = function(event){
    console.log("printing");
    if(this.initialized != true)
        this.initialize();
    var operation = event.getParameter('opt');
    if(operation !== 'undefined'){
        console.log("haha");
        if ( operation == 'print' ){
            var type = event.getParameter('type');
            var value = event.getParameter('value'); 
            this.display.setCursor(0,0);
            this.display.write(type);
            this.display.setCursor(1,0);
            this.display.write(value);
        }
    }
};




/**
 * Rotate through a color pallette and display the
 * color of the background as text
 */
LCDManager.prototype.rotateColors = function(display) {
    var red = 0;
    var green = 0;
    var blue = 0;
    this.display.setColor(red, green, blue);
    setInterval(function() {
        blue += 64;
        if (blue > 255) {
            blue = 0;
            green += 64;
            if (green > 255) {
                green = 0;
                red += 64;
                if (red > 255) {
                    red = 0;
                }
            }
        }
        this.display.setColor(red, green, blue);
        this.display.setCursor(0,0);
        this.display.write('red=' + red + ' grn=' + green + '  ');
        this.display.setCursor(1,0);
        this.display.write('blue=' + blue + '   ');  // extra padding clears out previous text
    }, 1000);
}

/**
 * Use the hand rolled i2c.js code to do the
 * same thing as the previous code without the
 * upm library
 
function useLcd() {

    display.setColor(0, 60, 255);
    display.setCursor(1, 1);
    display.write('hi there');
    display.setCursor(0,0);  
    display.write('more text');
    /*display.waitForQuiescent()
    .then(function() {
        rotateColors(display);
    })
    .fail(function(err) {
        console.log(err);
        display.clearError();
        rotateColors(display);
    });*/
//}
