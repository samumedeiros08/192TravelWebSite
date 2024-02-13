const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const faqController = require('./src/controllers/faqController');
const contactController = require('./src/controllers/contactController');
const ourhistoryController = require('./src/controllers/ourHistoryController');
const servicesController = require('./src/controllers/servicesController');
const planningController = require('./src/controllers/planningController');

const weather = require('./src/middleware/weatherMiddleware');
const translation = require('./src/middleware/translateAPI');


route.get('/', weather.weatherMiddleware, homeController.homePage);
route.post('/', translation.translateAPI ,weather.weatherMiddleware, homeController.homePost);

route.get('/index.html',weather.weatherMiddleware, homeController.homePage);
route.post('/index.html',weather.weatherMiddleware, homeController.homePost);

route.get('/contact.html', contactController.contact);
route.get('/faq.html', faqController.faq);
route.get('/ourhistory.html', ourhistoryController.ourHistory);
route.get('/services.html', servicesController.services);
route.get('/startplanning.html', planningController.planning);


module.exports = route