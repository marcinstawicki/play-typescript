"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class AbstractRegExp extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.basic_latin_letters = '\\u0041-\\u005A\\u006-\\u007A';
        this.basicLettersLabel = 'basicLettersKey';
        this.basic_latin_numbers = '\\u0030-\\u0039';
        this.basicNumbersLabel = 'digitsKey';
        this.basic_latin_special_characters = '\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E';
        this.basicSpecialCharactersLabel = '!"#$%&\\\'()*+,-./  :,<=>?@  [\\]^_  {|}~';
        this.space = '\\u0020';
        this.spaceLabel = 'spaceKey';
        this.lowercaseLettersLabel = 'lowercaseLettersKey';
        this.uppercaseLettersLabel = 'uppercaseLettersKey';
    }
    isError() {
        if (!super.isError()) {
            if (typeof this.shallValue === 'string') {
                this.shallValue = [this.shallValue];
            }
            const errors = this.shallValue.filter((shallValue) => {
                const reg = new RegExp(shallValue);
                const result = reg.test(this.isValue);
                return !result;
            });
            return this.shallValue.length === errors.length;
        }
        return true;
    }
}
exports.default = AbstractRegExp;
//# sourceMappingURL=abstract-reg-exp.js.map