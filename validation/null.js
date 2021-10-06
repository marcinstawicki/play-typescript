"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class Null extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['nullKey'];
    }
    isError() {
        if (!super.isError()) {
            return this.isValue !== null;
        }
        return true;
    }
}
exports.default = Null;
//# sourceMappingURL=null.js.map