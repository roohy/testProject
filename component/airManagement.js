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
        response.eventType = prism.core.prismConstants.REPLY;
        if( opt == 'getPPM'){
            //console.log("har har getting ppm");
            response.addParameter('opt','response');
            response.addParameter('type','CO PPM');
            response.addParameter('value',this.sensor.getPPM().toString());
            
        }
        else if( opt == 'getRaw'){
            response.addParameter('opt','response');
            response.addParameter('type','Raw Air');
            response.addParameter('value',this.sensor.getSample().toString);
            
        }
        else if( opt == 'getText'){
            
            response.addParameter('opt','response');
            response.addParameter('type','textAir');
            var raw = this.sensor.getSample();
            var test;
            if ( raw < 50 )
                test = "Fresh Air";
            else if( raw < 200)
                test = "Normal Indoor Air";
            else if (raw < 400)
                test = "Low Pollution";
            else if( raw < 600)
                test = "High Pollution - Action Recommended";
            else
                test = "Very High Pollution - Take Action Immediately";

            response.addParameter('value',test);
        }
        
        this.send(response);
    }
};
