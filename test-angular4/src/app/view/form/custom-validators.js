"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.requiredWhen = function (requiredControlName, controlToCheckName) {
        return function (control) {
            var required = control.get(requiredControlName).value;
            var toCheck = control.get(controlToCheckName).value;
            return (required || (toCheck && !required))
                ? null
                : { requiredwhen: true };
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
;
