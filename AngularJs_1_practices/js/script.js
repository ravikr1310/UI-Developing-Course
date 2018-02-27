// JavaScript Document
var app=angular.module("route",["ngRoute"]);
//route
app.config(function($routeProvider,$locationProvider){
	$routeProvider.when("/home",{
			templateUrl:"template/home.html",
			controller:"homeController"
		}).when("/courses",{
			templateUrl:"template/courses.html",
			controller:"courseController"
		}).when("/students",{
			templateUrl:"template/students.html",
			controller:"studentController"
		})	
		
	//url ok
	$locationProvider.html5Mode(true); //solve url encoding problem	
	});
	
//call controller
app.controller("homeController",function($scope){
	$scope.heading="This is Route Concept";
	});
//course controller	
app.controller("courseController",function($scope){
	$scope.courseList=["PHP","Dotnet","JAVA","Web Designing","SEO","Pyton"];
	});
//student controller
app.controller("studentController",function($scope){
	$scope.stu=[
		{"name":"Rahul","age":17,"city":"delhi"},
		{"name":"Rahav","age":19,"city":"Kanpur"},
		{"name":"Mohan","age":18,"city":"Mathura"},
		{"name":"Rohan","age":19,"city":"pune"},
		{"name":"Meena","age":20,"city":"agra"},
	]
	});	
