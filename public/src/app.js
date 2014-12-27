angular.module('rassApp', ['ngRoute', 'ngResource', 'rassApp.controllers', 'rassApp.services']);

angular.module('rassApp').config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', { templateUrl: 'templates/home/index.html', controller: 'HomeCtrl'})
  .when('/home', { templateUrl: 'templates/home/index.html', controller: 'HomeCtrl'})
  .when('/users', { templateUrl: 'templates/users/user/users.html', controller: 'UserListCtrl'})
  .when('/user/:id', { templateUrl: 'templates/users/user/user-edit.html', controller: 'UserDetailCtrl'})
  .when('/users/create', { templateUrl: 'templates/users/user/user-add.html', controller: 'UserCreateCtrl'})
  .when('/admins', { templateUrl: 'templates/users/admin/admins.html', controller: 'AdminListCtrl'})
  .when('/admin/:id', { templateUrl: 'templates/users/admin/admin-edit.html', controller: 'AdminDetailCtrl'})
  .when('/admins/create', { templateUrl: 'templates/users/admin/admin-add.html', controller: 'AdminCreateCtrl'})
  .when('/sites', { templateUrl: 'templates/sites/sites.html', controller: 'SiteListCtrl'})
  .when('/site/:id', { templateUrl: 'templates/sites/site-edit.html', controller: 'SiteDetailCtrl'})
  .when('/sites/create', { templateUrl: 'templates/sites/site-add.html', controller: 'SiteCreateCtrl'})
  .when('/zones', { templateUrl: 'templates/zones/zones.html', controller: 'ZoneListCtrl'})
  .when('/zone/:id', { templateUrl: 'templates/zones/zone-edit.html', controller: 'ZoneDetailCtrl'})
  .when('/zones/create', { templateUrl: 'templates/zones/zone-add.html', controller: 'ZoneCreateCtrl'})
  .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
});