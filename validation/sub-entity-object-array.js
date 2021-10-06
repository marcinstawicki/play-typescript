"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class SubEntityObjectArray extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['subEntityObjectKey'];
    }
    isError() {
        if (!super.isError()) {
            const isSubEntityInterface = (SubEntityOrNot) => {
                const forcedSubEntityInterface = SubEntityOrNot;
                if (forcedSubEntityInterface.id && forcedSubEntityInterface.stringField) {
                    return true;
                }
                return false;
            };
            return !this.isValue.every((dataSet) => {
                return isSubEntityInterface(dataSet);
            });
        }
        return true;
    }
}
exports.default = SubEntityObjectArray;
//# sourceMappingURL=sub-entity-object-array.js.map