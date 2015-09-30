var TEMP_PIN = 0;
TempratureManager = function(){
    prism.core.abstractImplementation.call(this);
    var groveSensor = require('jsupm_grove');
    this.sensor = new groveSensor.GroveTemp(TEMP_PIN);

};
TempratureManager.prototype = Object.create(prism.core.abstractImplementation.prototype);
TempratureManager.prototype.constructor = TempratureManager;



TempratureManager.prototype.handle = function(event){
    var opt = event.getParameter('opt');
    if( opt !== 'undefined' && opt == 'getTemp'){
        var response = new prism.core.event("response");
        response.addParameter('opt','response');
        response.addParameter('type','Temprature');
        response.addParameter('value',this.sensor.value().toString());
        this.send(response);
    }
};