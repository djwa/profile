define(['./../module'], function (module) {
    'use strict';


    Controller.$inject = [
        '$scope'
    ];

    function Controller($scope) {
        var path = 'images/';
        $scope.DesktopImgPath = path + "desktop_color.png";
    }


    module.controller('imagePathCrtl', Controller);
});