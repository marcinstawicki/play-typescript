"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_validation_1 = __importDefault(require("./abstract-validation"));
class BlobObject extends abstract_validation_1.default {
    constructor(value = undefined) {
        super(value);
        this.labelKeys = ['blobObjectKey'];
    }
    isError() {
        if (!super.isError()) {
            return !(this.isValue instanceof Blob);
        }
        return true;
    }
}
exports.default = BlobObject;
//# sourceMappingURL=blob-object.js.map