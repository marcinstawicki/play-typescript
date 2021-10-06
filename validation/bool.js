"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class Bool extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['booleanKey'];
    }
    isError() {
        if (!super.isError()) {
            return typeof this.isValue !== 'boolean';
        }
        return true;
    }
}
exports.default = Bool;
//# sourceMappingURL=bool.js.map