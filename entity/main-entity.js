"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_entity_1 = __importDefault(require("./abstract-entity"));
const validation_1 = require("../validation");
class MainEntity extends abstract_entity_1.default {
    constructor() {
        super();
        this.stringField = [
            new validation_1.Required(),
            new validation_1.MinLength().setShallValue(3),
            new validation_1.MaxLength().setShallValue(100),
            new validation_1.BasicAlphaNumSpaceSpecial,
        ],
            this.smallIntegerField = [
                new validation_1.Required,
                new validation_1.Integer,
                new validation_1.MinValue().setShallValue(1),
                new validation_1.MaxValue().setShallValue(32767),
                new validation_1.MinLength().setShallValue(1),
                new validation_1.MaxLength().setShallValue(5)
            ],
            this.integerField = [
                new validation_1.Required,
                new validation_1.Integer,
                new validation_1.MinValue().setShallValue(1),
                new validation_1.MaxValue().setShallValue(2147483647),
                new validation_1.MinLength().setShallValue(1),
                new validation_1.MaxLength().setShallValue(10)
            ],
            this.bigIntegerField = [
                new validation_1.Required,
                new validation_1.Integer,
                new validation_1.MinValue().setShallValue(1),
                new validation_1.MaxValue().setShallValue(9223372036854775807),
                new validation_1.MinLength().setShallValue(1),
                new validation_1.MaxLength().setShallValue(19),
            ],
            this.booleanField = [
                new validation_1.Required,
                new validation_1.Bool,
            ],
            this.decimalField = [
                new validation_1.Required,
                new validation_1.Float
            ],
            this.floatField = [
                new validation_1.Required,
                new validation_1.Float,
            ],
            this.dateField = [
                new validation_1.Required,
                new validation_1.DateTime,
            ],
            this.timeField = [
                new validation_1.Required,
                new validation_1.TimeFormat,
            ],
            this.dateTimeField = [
                new validation_1.Required,
                new validation_1.DateTime,
            ],
            this.textField = [
                new validation_1.Required,
                new validation_1.BasicAlphaNumSpaceSpecial,
            ],
            this.arrayOfStringField = [
                new validation_1.Required,
                new validation_1.StringArray,
            ],
            this.arrayOfNumberField = [
                new validation_1.Required,
                new validation_1.NumberArray
            ],
            this.arrayOfStringOrNumberField = [
                new validation_1.Required,
                new validation_1.StringNumberArray
            ],
            this.objectField = [
                new validation_1.Required,
                new validation_1.PureObject
            ],
            this.arrayOfObjectField = [
                new validation_1.Required,
                new validation_1.ObjectArray
            ],
            this.arrayOfParticularObjectField = [
                new validation_1.Required,
                new validation_1.SubEntityObjectArray
            ],
            this.jsonField = [
                new validation_1.Required,
                new validation_1.JsonString
            ],
            this.nullField = [
                new validation_1.Required,
                new validation_1.Null
            ],
            this.undefinedField = [
                new validation_1.Required,
                new validation_1.Undefined
            ];
    }
}
exports.default = MainEntity;
;
//# sourceMappingURL=main-entity.js.map