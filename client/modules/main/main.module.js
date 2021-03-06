import angular from 'angular';
import 'angular-ui-router';

import 'style.css!'; // ! tells the loader that this is not a js file.
import '/modules/html_templates/html_templates.module';    //Inject the js file that contains all our html markup here

import MainConfig from './main.config';
import MainCtrl from './main.controller';
import Home from '/modules/home/home.module';   //You need to give the absolute path


const main = angular.module('Main', ['ui.router', Home.name, 'HTMLTemplates'])
    .config(MainConfig)
    .controller('MainCtrl', MainCtrl);

export default main;

angular.element(document).ready(function () {
    return angular.bootstrap(document, [main.name]);
});