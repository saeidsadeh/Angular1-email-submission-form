/**
 * Created by saeidsadeh on 2017-02-02.
 */
/*****************************************
 * Declare application reference.
 *****************************************/
// Inject routing service and controller reference.
var emailApp = angular.module('emailApp', ['ngRoute', 'emailControllers'])
    .config(function ($routeProvider) {

        /*****************************************
         * Define routes.
         *****************************************/
        // For the 'home' page.
        $routeProvider.when("/home", {
            templateUrl: 'views/email.html',
            controller: 'EmailCtrl'
        })
        // For the 'about' page.
        $routeProvider.when("/aboutus", {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
            // For the 'default' page.
            .otherwise({ redirectTo: '/home' });
    });
