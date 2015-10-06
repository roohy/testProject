/**
 * Created by Ruhollah on 7/13/2015.
 */
//var List = ['Temprature


Controller = function(){
    prism.core.abstractImplementation.call(this);
    this.vals = {'Temprature':'0'};
    this.currentKey = 'Temprature';
    this.currentIndex = 0;
    console.log("controller initialized");

};
Controller.prototype = Object.create(prism.core.abstractImplementation.prototype);
Controller.prototype.constructor = Controller;
Controller.prototype.start = function(){
    var buttonMsg = new prism.core.event("Button");
    buttonMsg.addParameter('opt','startButton');
    buttonMsg.eventType = prism.core.prismConstants.REQUEST;
    this.send(buttonMsg);
    setInterval(function(){
        //console.log("getting infromation in control");
        
        var msg = new prism.core.event('event');
        msg.addParameter('opt','getTemp');
        msg.eventType = prism.core.prismConstants.REQUEST;
        this.send(msg);
        //--------------------------------------------------------------------------------------------------------------------------------------------
        
        var msg = new prism.core.event('event');
        msg.addParameter('opt','getPPM');
        msg.eventType = prism.core.prismConstants.REQUEST;
        this.send(msg);
        //--------------------------------------------------------------------------------------------------------------------------------------------
        
        var msg = new prism.core.event('event');
        msg.addParameter('opt','getRaw');
        msg.eventType = prism.core.prismConstants.REQUEST;
        this.send(msg);
        //----------------------------------------------------------------------------------------------------------------------------------------------
        
        
        var msg = new prism.core.event('event');
        msg.addParameter('opt','getText');
        msg.eventType = prism.core.prismConstants.REQUEST;
        this.send(msg);
        //-------------------------------------------------------------------------------------------------------------------------------------------
        
    }.bind(this) , 10000);
};
Controller.prototype.print = function(){
        var e = new prism.core.event('request');
        e.addParameter('opt','print');
        e.addParameter('type', this.currentKey);
        e.addParameter('value', this.vals[this.currentKey]);
        e.eventType =  prism.core.prismConstants.REQUEST;
        this.send(e);
    }

Controller.prototype.handle = function(event){
    //console.log(event);
    var opt = event.getParameter('opt');
    if( opt !== 'undefined' && opt == 'response' ){
        var key = event.getParameter('type')
        this.vals[key] = event.getParameter('value');
        if(this.currentKey == key)
            this.print();
        
    }
    else if( opt !== 'undefined' && opt == 'clicked'){
        console.log("hahahaha  " + this.vals+ ":::"+ Object.keys(this.vals));
        var len = (Object.keys(this.vals)).length;
        this.currentIndex = (this.currentIndex+1)%len;
        this.currentKey = Object.keys(this.vals)[this.currentIndex];
        this.print();
        
    }
};
    
