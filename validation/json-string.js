"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class JsonString extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['jsonStringKey'];
    }
    isError() {
        if (!super.isError()) {
            let result = false;
            if (typeof this.isValue === 'string') {
                try {
                    JSON.parse(this.isValue);
                    result = false;
                }
                catch (e) {
                    result = true;
                }
            }
            return result;
        }
        return true;
    }
}
exports.default = JsonString;
//# sourceMappingURL=json-string.js.map