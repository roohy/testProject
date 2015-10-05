var AIR_PIN = 1;
AirManager = function(){
    prism.core.abstractImplementation.call(this);
    var upmTP401 = require('jsupm_gas');
    this.sensor = new upmTP401.TP401(AIR_PIN);
    this.interval = 20000;

};
AirManager.prototype = Object.create(prism.core.abstractImplementation.prototype);
AirManager.prototype.constructor = AirManager;

AirManager.prototype.handle = function(event){
    var opt = event.getParameter('opt');
    if ( opt !== 'undefined' ){
        var response = new prism.core.event('response');
        if( opt == 'getPPM'){
            //console.log("har har getting ppm");
            response.addParameter('opt','response');
            response.addParameter('type','CO PPM');
            response.addParameter('value',this.sensor.getPPM().toString());
            response.eventType = prism.core.prismConstants.REPLY;
            this.send(response);
        }
        //else if( opt == 'getRaw'){
        //}
    }
};
