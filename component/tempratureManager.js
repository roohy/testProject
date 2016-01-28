var TEMP_PIN = 0;
TempratureManager = function(){
    prism.core.abstractImplementation.call(this);
    var groveSensor = require('jsupm_grove');
    this.sensor = new groveSensor.GroveTemp(TEMP_PIN);

};
TempratureManager.prototype = Object.create(prism.core.abstractImplementation.prototype);
TempratureManager.prototype.constructor = TempratureManager;



TempratureManager.prototype.handle = function(event){
    //console.log("haahaaa");
    //console.log(event);
    var opt = event.getParameter('opt');
    if( opt !== 'undefined' && opt == PRISM_PROJECT.constants.requests.getTemp){
        var response = new prism.core.event("response");
        response.addParameter('opt',PRISM_PROJECT.constants.requests.response);
        response.addParameter('type',PRISM_PROJECT.constants.responses.temprature);
        response.addParameter('value',this.sensor.value().toString());
        response.eventType =  prism.core.prismConstants.REPLY;
        this.send(response);
    }
};