"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class DateTime extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['dateTimeKey'];
    }
    isError() {
        if (!super.isError()) {
            return new Date(this.isValue).toString() === 'Invalid Date';
        }
        return true;
    }
}
exports.default = DateTime;
//# sourceMappingURL=date-time.js.map