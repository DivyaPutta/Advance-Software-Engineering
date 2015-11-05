
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
.controller('adminCtrl', function($scope, $state) {
    $scope.generateqrcode=function() {
        $state.go('qrpage');
    }
})
.controller('studenthomeCtrl', function($scope, $state, $stateParams) {
     console.log($stateParams.username);
    $scope.view=function() {
       
        
        $state.go('view', {username: $stateParams.username} );
    }
})


.controller('viewCtrl', function($scope, $state, $stateParams, $http) {
     console.log($stateParams.username);
   $scope.username = $stateParams.username;
    
    
    
})


.controller('qrpageCtrl', function ($scope, $http) {

      //  document.getElementById('username').innerHTML += localStorage.getItem('username');  
     // $scope.initialize = function () {
     //    $scope.username = localStorage.getItem('UserName'); 
     //    console.log($scope.username);
     //    document.getElementById('username').innerHTML = "Hi";
     // };
 
$scope.generate = function(username) {
 document.getElementById("qrimg").src = "https://api.qrserver.com/v1/create-qr-code/?data="+document.getElementById("username").value +"&amp;size=100x100" ; 
}

/*$scope.getdetails = function () {
$http.get('http://api.qrserver.com/v1/read-qr-code/?fileurl='+document.getElementById("qrimg").src).success(function(data) {
       //   console.log(data[0].symbol[0].data);
         // document.getElementById("country").innerHTML = data[0].symbol[0].data;

         $http.get('http://api.zippopotam.us/us/'+document.getElementById("username").value).success(function(data) {
            console.log(data);
            document.getElementById("country").innerHTML = data.country;
            document.getElementById("place").innerHTML = data.places[0]['place name'];
            document.getElementById("state").innerHTML = data.places[0].state;
            document.getElementById("lat").innerHTML = data.places[0].latitude;
            document.getElementById("lng").innerHTML = data.places[0].longitude;
         })                     
//})
};*/



})
.controller('studentloginCtrl', function($scope, StudentLoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.studentlogin = function(username) {
         StudentLoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('studenthome', {username: $scope.data.username});
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }});