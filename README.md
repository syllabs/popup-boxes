popup-boxes
===========

AngularJS directive to use JS popup boxes.

Requirements
------------

jQuery is needed to stop event propagation.

The directives
--------------

The following directives generates a call to the corresponding JS popup
boxes and prevent ng-click based on the user input.

    alert="{{message}}"
    confirm="{{message}}"
    prompt="{{message}}"

These directives can be used to retrieve the user input instead.

    alert-model="varName"
    confirm-model="varName"
    prompt-model="varName"

Example
-------

```html
    <div ng-controller="Demo">
        <ul>
            <li ng-repeat="item in items">
                {{item.name}}
                <button ng-click="delete(item)" confirm="Delete {{item.name}}?">del</button>
            </li>
        </ul>
    </div>
```
