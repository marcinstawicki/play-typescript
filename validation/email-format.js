"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class EmailFormat extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = `^[${this.basic_latin_letters}${this.basic_latin_numbers}._%-]+@[${this.basic_latin_letters}${this.basic_latin_numbers}._%-]+\\.[${this.basic_latin_letters}]{2,4}$`;
        this.labelKeys = [
            this.basicLettersLabel,
            this.basicNumbersLabel,
            '._%-',
            'something@domain.com',
        ];
    }
}
exports.default = EmailFormat;
//# sourceMappingURL=email-format.js.map