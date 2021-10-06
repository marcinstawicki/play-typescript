"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class ObjectArray extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['objectArrayKey'];
    }
    isError() {
        if (!super.isError()) {
            return !this.isValue.every((elem) => typeof elem === 'object' && elem !== null && elem.constructor === Object);
        }
        return true;
    }
}
exports.default = ObjectArray;
//# sourceMappingURL=object-array.js.map