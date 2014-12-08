/**
 * Created by Ro0ohy on 11/16/2014.
 */


Server = function(){
    prism.core.abstractImplementation.call(this);

};

Client = function(){
    prism.core.abstractImplementation.call(this);
};
Client.prototype.sendMessage=function(){
    console.log("it is not about prism. It is about sending a message >:)")
    var event = new prism.core.event("Message");
    event.addParameter("Value","harharrr");
    event.eventType = prism.core.prismConstants.REQUEST;
    this.send(event);
};

Server.prototype.handle = function(event){
    console.log("harhar");
}
/*
console.log('Hi, First Test for Prism... ');
console.log('Initializing an instance of The Brick Class...');
brick1 = new prism.core.brick();
console.log('Initialized Brick, Now initializing an Architecture....');
arch1 = new prism.core.architecture('Arch-1');
console.log('Initialized the arch1.'+arch1+" the name is "+arch1.name);
*/
var scf = new prism.core.scaffold();
var fifo = new prism.core.FIFOScheduler(100);
var roundRobin = new prism.core.roundRobinDispatcher(fifo,2);
scf.dispatcher = roundRobin;
scf.scheduler = fifo;

var arch = new prism.core.architecture("clientServer");
arch.scaffold = scf;

var serverBehavior = new Server();

var serverComp = new prism.core.component("server",serverBehavior);
serverComp.scaffold = scf;

var clientBehavoir = new Client();
var clientComp = new prism.core.component("Client",clientBehavoir);
clientComp.scaffold = scf;


arch.add(clientComp);
arch.add(serverComp);

var clientRequestPort = new prism.core.port("Client request Port"  ,prism.core.prismConstants.REQUEST);
clientComp.addCompPort(clientRequestPort);


var serverReplyPort = new prism.core.port("Server Reply Port" , prism.core.prismConstants.REPLY);
serverComp.addCompPort(serverReplyPort);

arch.weld(serverReplyPort,clientRequestPort);

//roundRobin.start();
arch.start();

clientBehavoir.sendMessage();