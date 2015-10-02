/**
 * Created by Ruhollah on 7/13/2015.
 */
//In this File we add components and connectors and ports.

var prism = prism || {};
prism.core = prism.core || {};

//abstract implementations will should be connected to different components. Define your components here:
PRISM_PROJECT.components = {
    'lcd': LCDManager,
    'tempSensor': TempratureManager,
    'controller': Controller,
    'button': ButtonManager
};
PRISM_PROJECT.connectors = ['mainBus'];
PRISM_PROJECT.ports= [
    ['controller','mainBus'],
    ['mainBus','tempSensor'],
    ['tempSensor','mainBus'],
    ['mainBus','controller'],
    ['controller', 'lcd'],
    ['mainBus','button']
];

