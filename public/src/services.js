var services = angular.module('rassApp.services', ['ngResource']);

services
.factory('AdminsFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/admins', {}, {
		query: { method: 'GET', isArray: true},
		create: { method: 'POST'}
	});
})
.factory('AdminFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/admins/:id', {}, {
		show: { method: 'GET' },
		update: { method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'}}
	});
})
.factory('UsersFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/swipers', {}, {
		query: { method: 'GET', isArray: true},
		create: { method: 'POST'}
	});
})
.factory('UserFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/swipers/:id', {}, {
		show: { method: 'GET' },
		update: { method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'}}
	});
})
.factory('SitesFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/sites', {}, {
		query: { method: 'GET', isArray: true},
		create: { method: 'POST'}
	});
})
.factory('SiteFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/sites/:id', {}, {
		show: { method: 'GET' },
		update: { method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'}}
	});
})
.factory('ZonesFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/zones', {}, {
		query: { method: 'GET', isArray: true},
		create: { method: 'POST'}
	});
})
.factory('ZoneFactory', function ($resource) {
	return $resource('http://localhost/rass_prototype/public/index.php/api/zones/:id', {}, {
		show: { method: 'GET' },
		update: { method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'}}
	});
})
.service('popupService',function($window){
	this.showPopup=function(message){
		return $window.confirm(message);
	}
});;