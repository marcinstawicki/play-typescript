"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class Integer extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = `^[${this.basic_latin_numbers}]+$`;
        this.labelKeys = [
            this.basicNumbersLabel,
        ];
    }
}
exports.default = Integer;
//# sourceMappingURL=integer.js.map