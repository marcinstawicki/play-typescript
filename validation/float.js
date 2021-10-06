"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class Float extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = `^(\\-|\\+)?([0-9]+(\\.[0-9]+)?|Infinity)$`;
        this.labelKeys = [
            'floatKey',
            '0.15'
        ];
    }
}
exports.default = Float;
//# sourceMappingURL=float.js.map