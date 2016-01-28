var ContextTypes = {
    temprature: 'temprature',
    
};


var CGU = {};

CGU.initialize = functio(){
    console.log("Initializing the board");
    var mraa = require('mraa');
    var version = mraa.getVersion();

    if (version >= 'v0.6.1') {
        console.log('mraa version (' + version + ') ok');
    }
    else {
        console.log('meaa version(' + version + ') is old - this code may not work');
    }
    
    this.i2c = require('./component/i2c');
    this.display = new this.i2c.LCD(0);
    this.display.setCursor(0,0);
    this.display.write("Initializing the Context Gatherer");
    
    //-------temp
    var groveSensor = require('jsupm_grove');
    this.tempratureSensor = new groveSensor.GroveTemp(TEMP_PIN);
    
    //---Air
    var upmTP401 = require('jsupm_gas');
    this.sensor = new upmTP401.TP401(AIR_PIN);
    
};