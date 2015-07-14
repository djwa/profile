define(['./../module'], function (module) {
    'use strict';


    Controller.$inject = [
        '$scope'
    ];

    function Controller($scope) {
        var path = 'images/';
        $scope.DesktopImgPath = path + "desktop_color.png";
        $scope.LogoImgPath = "../" + path + "angular-logo.png";
    }


    module.controller('imagePathCrtl', Controller);
});