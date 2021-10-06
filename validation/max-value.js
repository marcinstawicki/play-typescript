"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class MaxValue extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['maxValueKey'];
    }
    isError() {
        if (!super.isError()) {
            return this.shallValue <= this.isValue;
        }
        return true;
    }
}
exports.default = MaxValue;
//# sourceMappingURL=max-value.js.map