"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class PasswordFormat extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$';
        this.labelKeys = [
            this.lowercaseLettersLabel,
            this.uppercaseLettersLabel,
            this.basicNumbersLabel,
            this.basicSpecialCharactersLabel,
            'minCharactersLengthKey',
        ];
    }
}
exports.default = PasswordFormat;
//# sourceMappingURL=password-format.js.map