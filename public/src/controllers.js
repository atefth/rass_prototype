angular.module('rassApp.controllers', [])
.controller('NavigationCtrl', function ($scope, $window) {
  $scope.items = [
  {name: 'Home', activated: true, url: 'home'}, 
  {name: 'Sites', activated: false, url: 'sites'}, 
  {name: 'Zones', activated: false, url: 'zones'}, 
  {name: 'Users', activated: false, url: 'users'},
  {name: 'Admins', activated: false, url: 'admins'}, 
  {name: 'Maps', activated: false, url: 'maps'}, 
  {name: 'Login', activated: false, url: 'login'}];

  $scope.activate = function (item) {
    $scope.items.forEach(function(item, index){
      item.activated = false;
    });
    item.activated = true;
  }
})
.controller('HomeCtrl', function ($scope) {

})
.controller('AdminListCtrl', function($scope, popupService, $window, AdminsFactory, AdminFactory, $location) {
  $scope.admins = AdminsFactory.query();
  $scope.createAdmin = function () {
    $location.path('/admins/create');
  };
  $scope.editAdmin = function (adminId) {
    $location.path('/admin/' + adminId);
  };
  $scope.deleteAdmin = function(adminId) {
    if (popupService.showPopup('Really delete this?')) {
      AdminFactory.delete({id: adminId});
      $scope.admins = AdminsFactory.query();
    }
  };
})
.controller('AdminDetailCtrl', function($scope, $routeParams, AdminFactory, $location) {
  $scope.admin = AdminFactory.show({id: $routeParams.id});
  $scope.updateAdmin = function() {
    AdminFactory.update($scope.admin);
    $location.path('/admins');
  };

  $scope.cancel = function () {
    $location.path('/admins');
  };
})
.controller('AdminCreateCtrl', function($scope, $routeParams, AdminsFactory, $location) {
  $scope.admin = {};
  $scope.createNewAdmin = function() {
    AdminsFactory.create($scope.admin);
    $location.path('/admins');
  };
})
.controller('UserListCtrl', function($scope, popupService, $window, UsersFactory, UserFactory, $location) {
  $scope.users = UsersFactory.query();
  $scope.createUser = function () {
    $location.path('/users/create');
  };
  $scope.editUser = function (userId) {
    $location.path('/user/' + userId);
  };
  $scope.deleteUser = function(userId) {
    if (popupService.showPopup('Really delete this?')) {
      UserFactory.delete({id: userId});
      $scope.users = UsersFactory.query();
    }
  };
})
.controller('UserDetailCtrl', function($scope, $routeParams, UserFactory, $location) {
  $scope.user = UserFactory.show({id: $routeParams.id});
  $scope.updateUser = function() {
    UserFactory.update($scope.user);
    $location.path('/users');
  };

  $scope.cancel = function () {
    $location.path('/users');
  };
})
.controller('UserCreateCtrl', function($scope, $routeParams, UsersFactory, $location) {
  $scope.user = {};
  $scope.createNewUser = function() {
    UsersFactory.create($scope.user);
    $location.path('/users');
  };
})
.controller('SiteListCtrl', function($scope, popupService, $window, SitesFactory, SiteFactory, $location) {
  $scope.sites = SitesFactory.query();
  $scope.createSite = function () {
    $location.path('/sites/create');
  };
  $scope.editSite = function (siteId) {
    $location.path('/site/' + siteId);
  };
  $scope.deleteSite = function(siteId) {
    if (popupService.showPopup('Really delete this?')) {
      SiteFactory.delete({id: siteId});
      $scope.sites = SitesFactory.query();
    }
  };
})
.controller('SiteDetailCtrl', function($scope, $routeParams, SiteFactory, $location) {
  $scope.site = SiteFactory.show({id: $routeParams.id});
  $scope.updateSite = function() {
    SiteFactory.update($scope.site);
    $location.path('/sites');
  };

  $scope.cancel = function () {
    $location.path('/sites');
  };
})
.controller('SiteCreateCtrl', function($scope, $routeParams, SitesFactory, $location) {
  $scope.site = {};
  $scope.createNewSite = function() {
    SitesFactory.create($scope.site);
    $location.path('/sites');
  };
})
.controller('ZoneListCtrl', function($scope, popupService, $window, ZonesFactory, ZoneFactory, $location) {
  $scope.zones = ZonesFactory.query();
  $scope.createZone = function () {
    $location.path('/zones/create');
  };
  $scope.editZone = function (zoneId) {
    $location.path('/zone/' + zoneId);
  };
  $scope.deleteZone = function(zoneId) {
    if (popupService.showPopup('Really delete this?')) {
      ZoneFactory.delete({id: zoneId});
      $scope.zones = ZonesFactory.query();
    }
  };
})
.controller('ZoneDetailCtrl', function($scope, $routeParams, ZoneFactory, $location) {
  $scope.zone = ZoneFactory.show({id: $routeParams.id});
  $scope.updateZone = function() {
    ZoneFactory.update($scope.zone);
    $location.path('/zones');
  };

  $scope.cancel = function () {
    $location.path('/zones');
  };
})
.controller('ZoneCreateCtrl', function($scope, $routeParams, ZonesFactory, $location) {
  $scope.zone = {};
  $scope.createNewZone = function() {
    ZonesFactory.create($scope.zone);
    $location.path('/zones');
  };
})