/**
 * Created by Ruhollah on 7/10/2015.
 */
var prism = prism || {};
prism.core = prism.core || {};

var PRISM_PROJECT = PRISM_PROJECT || {};

//Define Dispatcher Type Here
PRISM_PROJECT.dispatcher = prism.core.roundRobinDispatcher;
PRISM_PROJECT.threadCount = 2;

//Define Scheduler Here
PRISM_PROJECT.scheduler = prism.core.FIFOScheduler;
PRISM_PROJECT.maxSize = 100;
PRISM_PROJECT.name = "The Architecture Name";

//add abstract implementation files
PRISM_PROJECT.implementations = ['./component/server.js','./component/client.js','./component/tempratureManager.js','./component/controller.js','./component/LCDManager.js' , './component/buttonManager.js', './component/airManagement.js'];


PRISM_PROJECT.constants = {};
PRISM_PROJECT.constants.requests = {};
PRISM_PROJECT.constants.requests.getTemp = "getTemp";
PRISM_PROJECT.constants.requests.getRawAir = "getRawAir";
PRISM_PROJECT.constants.requests.getPPM = "getPPM";
PRISM_PROJECT.constants.requests.getAirDescription = "getText";
PRISM_PROJECT.constants.requests.response = "response";
PRISM_PROJECT.constants.requests.startButton = "startButton";

PRISM_PROJECT.constants.context = {};
PRISM_PROJECT.constants.responses = {};
PRISM_PROJECT.constants.responses.temprature = "temprature";
PRISM_PROJECT.constants.responses.rawAir = "rawAir";
PRISM_PROJECT.constants.responses.ppm = "ppm";
PRISM_PROJECT.constants..responses.AirDescirption = "airdes";
PRISM_PROJECT.constants.responses.buttonClicked = "btnClicked";
PRISM_PROJECT.constants.context['temprature'] = {  message:'Temprature'};
PRISM_PROJECT.constants.context['rawAir'] = { message:'Raw Air Quality'};
PRISM_PROJECT.constants.context['ppm'] = {message: "CO PPM"};
PRISM_PROJECT.constants.context['airdes'] = {message: 'Air Descritopn'};

