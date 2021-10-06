"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_entity_1 = __importDefault(require("./abstract-entity"));
const validation_1 = require("../validation");
class SubEntity extends abstract_entity_1.default {
    constructor() {
        super();
        this.stringField = [
            new validation_1.Required(),
            new validation_1.MinLength().setShallValue(3),
            new validation_1.MaxLength().setShallValue(100),
            new validation_1.BasicAlphaNumSpaceSpecial
        ];
    }
}
exports.default = SubEntity;
;
//# sourceMappingURL=sub-entity.js.map