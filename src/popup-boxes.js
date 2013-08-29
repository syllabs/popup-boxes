(function() {
'use strict';
var linkFunction = function($parse, attrname, action) {
    return function(scope, element, attrs) {
        element.bind('click', function(e) {
            var message = attrs[attrname],
                model = attrs[attrname+'Model'];
            if (message) {
                if (model) {
                    $parse(model).assign(scope, action(message));
                    scope.$apply();
                } else {
                    if (!action(message)) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                }
            }
        });
    };
};

var directiveFunction = function($parse, attrname, action) {
    return {
        priority: 100,
        restrict: 'A',
        link: linkFunction($parse, attrname, action)
    };
};

angular.module('popup-boxes', [])
    .directive('alert', ['$parse',
        function($parse) {
            return directiveFunction($parse, 'alert', alert);
        }
    ])
    .directive('confirm', ['$parse',
        function($parse) {
            return directiveFunction($parse, 'confirm', confirm);
        }
    ])
    .directive('prompt', ['$parse',
        function($parse) {
            return directiveFunction($parse, 'prompt', prompt);
        }
    ]);
})();
