/**
 * Created by Ruhollah on 7/13/2015.
 */
//In this File we add components and connectors and ports.

var prism = prism || {};
prism.core = prism.core || {};

//abstract implementations will should be connected to different components. Define your components here:
PRISM_PROJECT.components = {
    'server1': Server,
    'client1': Client,
};
PRISM_PROJECT.connectors = ['mainConnector'];
PRISM_PROJECT.ports= [
    ['client1','server1']//,
    //['mainConnector','server1']
];

