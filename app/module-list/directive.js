var listDirective = angular.module('listDirective', []);

listDirective.directive('fellaslist', function () {
    return {
        restrict: "E",
        template: "new ELEMENT directive"
    };
});