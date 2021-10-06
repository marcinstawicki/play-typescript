"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class Undefined extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['undefinedKey'];
    }
    isError() {
        if (!super.isError()) {
            return typeof this.isValue !== 'undefined';
        }
        return true;
    }
}
exports.default = Undefined;
//# sourceMappingURL=undefined.js.map