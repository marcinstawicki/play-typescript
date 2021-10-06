"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class StringNumberArray extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['stringNumberArrayKey'];
    }
    isError() {
        if (!super.isError()) {
            return !this.isValue.every((elem) => typeof elem === 'string' || typeof elem === 'number');
        }
        return true;
    }
}
exports.default = StringNumberArray;
//# sourceMappingURL=string-number-array.js.map