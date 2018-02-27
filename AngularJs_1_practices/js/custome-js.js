var myApp = angular.module('myApp', []);
 
myApp.controller('myController', function($scope) {
    $scope.movies = ['Ice Age', 'Frozen'];
});

myApp.directive('myMovie', function() {
  return {
    restrict: 'E',                           // define directive type like: E=Element, A=Attribute, C=Class, M=Comment
    scope:{                                  // create a new child scope or an isolate scope
        //title: '@' // @ reads the attribute value
        //title: '=' // provides two-way binding
        //title: '&' // works with functions
    },
    transclude: 'true',                      // Copy original HTML content
    replace:true,                            // replace original markup with template
    template: '<span ng-transclude></span>', // define HTML markup
    link: function(scope, element, attr){    // define function, used for DOM manipulation
          element.append("<strong>"+attr.title+"</strong>");
          
    }
  };
});

// Multiple Modules in one Module

var module1 = angular.module("mod1", []);
module1.controller("ctrl1",function($scope){
    $scope.firstname = "Ravi";
});

var module2 = angular.module('mod2',[]);
module2.controller("ctrl2",function($scope){
    $scope.lastname = "Kumar";
});

angular.module("myAppMulti",["mod1", "mod2"]);


// defining factory
myApp.factory('myFactory',function(){
    var serviceObj = {};
    serviceObj.name = "";
    serviceObj.setName = function(newName){
        serviceObj.name = newName;
    };
    return serviceObj;
});

// defining service
myApp.service('myService',function(){
    this.name= "";
    this.setName = function(newName){
        this.name = newName;
        return this.name;
    };
});

// defining provider
myApp.provider('configurable',function(){
    var privateName = "";
    this.setName = function(newName){
        privateName = newName;
    };
    this.$get() = function(){
        return{
            name: privateName
        };
    };
});

// configuring provider
myApp.config(function(configurableProvider){
    configurableProvider.setName("Ravi Kumar");
});

// defining controller
myApp.controller('myController' function($scope, myService, myFactory, configurable){
    $scope.serviceName = myFactory.setName("Ravi Kumar");
    myFactory.setName("Ravi Kumar");
    $scope.factoryname = myFactory.name;
    $scope.providername = configurable.name;
});