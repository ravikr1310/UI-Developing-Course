// create module
// 
var myApp = angular.module('myApp',[]);

// create factory
myApp.factory('myFactory', function(){
    var factObj = {};
    factObj.name = "";
    factObj.setName = function(newName){
        factObj.name = newName;
    };
    return factObj;
});

// create service
myApp.service('myService', function(){
    this.name = '';
    this.setName = function(newName){
        this.name = newName;
        return this.name;
    };
});

// create provider
myApp.provider('configurable', function(){
    var privateName = '';
    this.setName = function(newName){
        privateName = newName;
    };
    this.$get = function(){
        return {
            name: privateName
        };
    };
});

// configuring provider
myApp.config(function(configurableProvider){
    configurableProvider.setName("Configural Value");
});

// create controller
myApp.controller("ctrl", function($scope, myFactory, myService, configurable){
    myService.setName("Angular Js 1.x");
    $scope.servicename = myService.name;
    
    myFactory.setName("Angular Js 1.x");
    $scope.factoryname = myFactory.name;
    
    $scope.providername = configurable.name;
});