/**
 * Created by Ruhollah on 7/13/2015.
 */
Controller = function(){
    prism.core.abstractImplementation.call(this);
    

};
Controller.prototype = Object.create(prism.core.abstractImplementation.prototype);
Controller.prototype.constructor = Controller;
Controller.prototype.start = function(){
    setInterval(function(){
        console.log("getting infromation in control");
        var msg = new prism.core.event('event');
        msg.addParameter('opt','getTemp');
        msg.eventType = prism.core.prismConstants.REQUEST;
        this.send(msg);
    }.bind(this) , 1000);
};


Controller.prototype.handle = function(event){
    //cosole.log("handling in controller "+event);
    var opt = event.getParameter('opt');
    if( opt !== 'undefined' && opt == 'response' ){
        var e = new prism.core.event('request');
        e.addParameter('opt','print');
        e.addParameter('type', event.getParameter('type'));
        response.eventType =  prism.core.prismConstants.REQUEST;
        this.send(response);
    }
};