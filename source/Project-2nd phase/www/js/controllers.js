
angular.module('starter.controllers', ['starter.services'])

.controller('LoginCtrl', function($scope, LoginService,UpdateService, DeleteService,  $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function(username) {
         LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('adminhome');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
           
    }
  /* $scope.fbLogin = function () {
    ngFB.login({scope: 'email, public_profile,publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                //$scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
};*/
    $scope.signup =function()
    {
        $state.go('register');
    }
    
    $scope.update =function(username)
    {
         UpdateService.updateUser($scope.data.username, $scope.data.password).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Updated!',
                template: 'Your account is updated succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Wrong Update!'
            });
        });
}
     $scope.delete =function(username)
    {
         DeleteService.deleteUser($scope.data.username, $scope.data.password).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Deleted!',
                template: 'Your account is deleted succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
         }
    
     
}
)
.controller('RegisterCtrl', function($scope, RegisterService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.register = function(email){
      
            RegisterService.RegisterUser($scope.data.firstname, $scope.data.lastname, $scope.data.address, $scope.data.age, $scope.data.email, $scope.data.username, $scope.data.password ).success(function(data) {
           alert(data.lastname);
                $state.go('login');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})
.controller('MainCtrl', function($scope, $state) {
    $scope.admin=function() {
        $state.go('login');
    }
    $scope.student=function() {
        $state.go('studentlogin');
    }
})
.controller('studentloginCtrl', function($scope, StudentLoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.studentlogin = function(username) {
         StudentLoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('studenthome');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }});