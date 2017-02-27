import angular from 'angular';
import app from './app';
import routes from './routes';
import template from './app.html';
import './scss/main.scss';

app.config(routes);

app.value('apiUrl', process.env.API_URL || 'http://localhost:3000/api');

document.body.innerHTML = template;
angular.bootstrap(document, [app.name]);