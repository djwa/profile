define(['./../module'], function() {
    'use strict';

//    todo: modify to requirejs!!!!!!!!!

//    var d = angular.module('listDirectives', []);

//    d.directive('uniqueEmail', function (fellas) {
//            return {
//                require: 'ngModel',
//                restrict: 'A',
//                link: function (scope, el, attrs, ctrl) {
//
//                    //TODO: We need to check that the value is different to the original
//
//                    //using push() here to run it as the last parser, after we are sure that other validators were run
//                    ctrl.$parsers.push(function (viewValue) {
//
//                        if (viewValue) {
//                            fellas.query({email: viewValue}, function (fellas) {
//                                if (fellas.length === 0) {
//                                    ctrl.$setValidity('uniqueEmail', true);
//                                } else {
//                                    ctrl.$setValidity('uniqueEmail', false);
//                                }
//                            });
//                            return viewValue;
//                        }
//                    });
//                }
//            };
//        });

//    d.directive('fellaslist', function () {
//        return {
//            restrict: "E"
//        };
//    });
//
//    d.directive('enter', function () {
//        return function (scope, element, attrs) {
//            element.bind('mouseenter', function () {
//                element.addClass(attrs.enter);
//            });
//        };
//    });
//
//    d.directive('leave', function () {
//        return function (scope, element, attrs) {
//            element.bind('mouseleave', function () {
//                element.removeClass(attrs.enter);
//            });
//        };
//    });
//
//    d.directive('topbar', function () {
//        return {
//            restrict: "E",
//            link: function (scope, element) {
//                element.bind("mouseenter", function () {
//                    console.log("CHECKED!");
//                });
//            }
//        };
//    });

});