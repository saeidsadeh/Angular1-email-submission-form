/**
 * Created by saeidsadeh on 2017-02-02.
 */
var emailControllers = (function () {
    'use strict';

    var ctrls = angular.module('emailControllers',[]);

    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Email Form";
    }]);

    ctrls.controller('EmailCtrl', ['$scope', function ($scope) {
        $scope.submitted = false;
        //noinspection JSAnnotator
        $scope.successfulMsg = false;
        $scope.submit = function (param) {
            if (!param){
                $scope.submitted=true;
                $scope.successfulMsg = false;
            }
            if(param){
                $scope.successfulMsg = true;
                $scope.submitted = false;
            }

        }
    }]);

    ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.aboutus = "This form is created by Saeid";
    }]);



    return ctrls;

}());