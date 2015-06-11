angular.module('starter.services', [])

.controller('PictureCtrl', function($scope, $cordovaCamera) {

    document.addEventListener("deviceready", function () {

        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // Yikes...Let me get back to you on that...something isn't right here!
        });

    }, false);
})

.controller('MyCtrl', function($scope, $cordovaOauth) {
    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    }
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);

    // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
    // $cordovaOauth.meetup(string consumerKey);
    // $cordovaOauth.foursquare(string clientId);
    // $cordovaOauth.salesforce(string loginUrl, string clientId);
    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);
});


