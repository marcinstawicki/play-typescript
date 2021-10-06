"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class Required extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
    }
}
exports.default = Required;
//# sourceMappingURL=required.js.map