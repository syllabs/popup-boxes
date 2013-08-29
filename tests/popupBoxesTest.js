describe("confirm without model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" confirm="confirm">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.confirm = function(arg) {
            scope.arg = arg;
            return scope.returnValue;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test confirm when users clicks on OK", function() {
        var button = elm.find('button');

        scope.returnValue = true;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('confirm');
    });

    it("test confirm when users clicks on Cancel", function() {
        var button = elm.find('button');

        scope.returnValue = false;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('initial');
        expect(scope.arg).toEqual('confirm');
    });
});

describe("confirm with model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" confirm-model="modelVar" confirm="confirm">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.confirm = function(arg) {
            scope.arg = arg;
            return scope.returnValue;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test confirm when users clicks on OK", function() {
        var button = elm.find('button');

        scope.returnValue = true;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('confirm');
        expect(scope.modelVar).toEqual(true);
    });

    it("test confirm when users clicks on Cancel", function() {
        var button = elm.find('button');

        scope.returnValue = false;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('confirm');
        expect(scope.modelVar).toEqual(false);
    });
});

describe("alert without model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" alert="alert!">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.alert = function(arg) {
            scope.arg = arg;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test alert when users clicks on OK", function() {
        var button = elm.find('button');

        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('initial');
        expect(scope.arg).toEqual('alert!');
    });
});

describe("alert with model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" alert-model="modelVar" alert="alert!">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.alert = function(arg) {
            scope.arg = arg;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test alert when users clicks on OK", function() {
        var button = elm.find('button');

        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('alert!');
        expect(scope.modelVar).toEqual(undefined);
    });
});

describe("prompt without model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" prompt="enter">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.prompt = function(arg) {
            scope.arg = arg;
            return scope.returnValue;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test prompt when users enters 'my fancy input'", function() {
        var button = elm.find('button');

        scope.returnValue = 'my fancy input';
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('enter');
    });

    it("test prompt when users clicks on Cancel", function() {
        var button = elm.find('button');

        scope.returnValue = undefined;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('initial');
        expect(scope.arg).toEqual('enter');
    });
});

describe("prompt with model", function() {
    var elm, scope;

    beforeEach(module("popup-boxes"));
    beforeEach(inject(function($rootScope, $compile, $window) {
        elm = angular.element(
            '<body ng-app>'+
            '<button ng-init="value=\'initial\'" ng-click="value=\'clicked!\'" prompt-model="modelVar" prompt="enter">click me</button>'+
            '</body>'
        );
        scope = $rootScope;
        $window.prompt = function(arg) {
            scope.arg = arg;
            return scope.returnValue;
        };
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("test prompt when users enters 'my fancy input'", function() {
        var button = elm.find('button');

        scope.returnValue = 'my fancy input';
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('enter');
        expect(scope.modelVar).toEqual('my fancy input');
    });

    it("test confirm when users clicks on Cancel", function() {
        var button = elm.find('button');

        scope.returnValue = undefined;
        expect(scope.value).toEqual('initial');
        elm.click();
        expect(scope.value).toEqual('clicked!');
        expect(scope.arg).toEqual('enter');
        expect(scope.modelVar).toEqual(undefined);
    });
});
