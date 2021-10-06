"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class PureObject extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['pureObjectKey'];
    }
    isError() {
        if (!super.isError()) {
            return !(typeof this.isValue === 'object' && this.isValue !== null && this.isValue.constructor === Object);
        }
        return true;
    }
}
exports.default = PureObject;
//# sourceMappingURL=pure-object.js.map