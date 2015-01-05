var d = angular.module('listDirectives', []);

d.directive('fellaslist', function () {
    return {
        restrict: "E"
    };
});

d.directive('enter', function () {
    return function (scope, element, attrs) {
        element.bind('mouseenter', function () {
            element.addClass(attrs.enter);
        });
    };
});

d.directive('leave', function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
            element.removeClass(attrs.enter);
        });
    };
});

d.directive('topbar', function () {
    return {
        restrict: "E",
        link: function (scope, element) {
            element.bind("mouseenter", function () {
                console.log("CHECKED!");
            });
        }
    };
});