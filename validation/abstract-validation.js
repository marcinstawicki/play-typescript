"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractValidation {
    constructor(value = undefined) {
        this.labelKeys = [];
        if (typeof value !== 'undefined') {
            this.isValue = value;
        }
        this.shallValue = null;
    }
    isError() {
        if (this.isValue === '' ||
            this.isValue === {} ||
            this.isValue === []) {
            this.labelKeys = ['noValueKey'];
            return true;
        }
        return false;
    }
    setIsValue(value) {
        this.isValue = value;
        return this;
    }
    setShallValue(value) {
        this.shallValue = value;
        return this;
    }
}
exports.default = AbstractValidation;
//# sourceMappingURL=abstract-validation.js.map