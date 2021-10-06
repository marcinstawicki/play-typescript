"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_reg_exp_1 = __importDefault(require("./abstract-reg-exp"));
class TimeFormat extends abstract_reg_exp_1.default {
    constructor(value = undefined) {
        super(value);
        this.shallValue = `^(?:(?:([01]?\\d|2[0-3]):)?([0-5]?\\d):)?([0-5]?\\d)$`;
        this.labelKeys = [
            'timeKey',
            '59:59:59',
            'h:m:s',
        ];
    }
}
exports.default = TimeFormat;
//# sourceMappingURL=time-format.js.map