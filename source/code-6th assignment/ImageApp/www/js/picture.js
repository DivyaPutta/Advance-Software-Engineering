imageApp.controller("SecureController", function($scope, $ionicHistory, $firebasearray, $cordovaCamera) {
    $ionicHistory.clearHistory();
    $scope.images = [];
    var fbAuth = fb.getAuth();
    if(fbAuth) {
        var userReference = fb.child("users/" + fbAuth.uid);
        var syncArray = $firebaseArray(userReference.child("images"));
        $scope.images = syncArray;
    } else {
        $state.go("firebase");
    }
    $scope.upload = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetheight: 500,
            saveToPhotoAlbum: false
        };
    $cordovaCamera.getPicture(options).then(function(imageData) {
   syncArray.$add({image: imageData}).then(function() {
       alert("Image has been uploaded");
   });
    }, function(error) {
        console.error(error);
    });