var BTN_PIN = 2;
ButtonManager = function(){
    prism.core.abstractImplementation.call(this);
    var groveSensor = require('jsupm_grove');
    this.sensor = new groveSensor.GroveButton(BTN_PIN);
    this.isListening = false;
};
ButtonManager.prototype = Object.create(prism.core.abstractImplementation.prototype);
ButtonManager.prototype.constructor = ButtonManager;

ButtonManager.prototype.startListening=function(){
    if ( !this.isListening){
        this.isListening = true;
        this.funcHandle = setInterval(function(){
            var value = this.sensor.value();
            if ( value == 1 ){
                var e = new prism.core.event("clicked");
                e.addParameter('opt','clicked');
                e.eventType = prism.core.prismConstants.REPLY;
                
        },300);
    }
};
ButtonManager.prototype.stopListening = function(){
    if ( this.isListening){
        this.isListening = false;
        clearInterval(this.funcHandle);
    }
};
ButtonManager.prototype.handle = function(event){
    var type = event.getParameter("opt");
    if ( type !== 'undefined' && type == 'startButton'){
        this.startListening();
    }
};