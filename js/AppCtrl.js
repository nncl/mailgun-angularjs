var app = angular.module('controllers.AppCtrl', []);

app.controller('AppCtrl', function ($scope, AppService) {
    $scope.user = {};

    $scope.send = function (form) {
        if (form.$valid) {
            AppService.send($scope.user).then(
                function success(res) {
                    console.log('Success');
                    console.log(res);
                },
                function error(err) {
                    console.log('Error');
                    console.log(err);
                }
            );
        }
    }
});