"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class BasicAlphaNumSpaceSpecial extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = `^[${this.basic_latin_letters}${this.space}${this.basic_latin_numbers}${this.basic_latin_special_characters}]+$`;
        this.labelKeys = [
            this.basicLettersLabel,
            this.spaceLabel,
            this.basicNumbersLabel,
            this.basicSpecialCharactersLabel,
        ];
    }
}
exports.default = BasicAlphaNumSpaceSpecial;
//# sourceMappingURL=basic-alpha-num-space-special.js.map