import AbstractEntity from "./abstract-entity";
import {
    Required,
    MinLength,
    MaxLength,
    MinValue,
    MaxValue,
    BasicAlphaNumSpaceSpecial,
    Integer,
    DateTime,
    Bool,
    StringArray,
    NumberArray,
    StringNumberArray,
    PureObject,
    ObjectArray,
    SubEntityObjectArray,
    JsonString,
    Null,
    Undefined,
    TimeFormat,
    Float
} from "../validation";
import {ValidationInterface} from "../interfaces";

export default class MainEntity extends AbstractEntity {
    protected stringField: ValidationInterface[];
    protected smallIntegerField: ValidationInterface[];
    protected integerField: ValidationInterface[];
    protected bigIntegerField: ValidationInterface[];
    protected booleanField: ValidationInterface[];
    protected decimalField: ValidationInterface[];
    protected floatField: ValidationInterface[];
    protected dateField: ValidationInterface[];
    protected timeField: ValidationInterface[];
    protected dateTimeField: ValidationInterface[];
    protected textField: ValidationInterface[];
    protected arrayOfStringField: ValidationInterface[];
    protected arrayOfNumberField: ValidationInterface[];
    protected arrayOfStringOrNumberField: ValidationInterface[];
    protected objectField: ValidationInterface[];
    protected arrayOfObjectField: ValidationInterface[];
    protected arrayOfParticularObjectField: ValidationInterface[];
    protected jsonField: ValidationInterface[];
    protected nullField: ValidationInterface[];
    protected undefinedField: ValidationInterface[];

    constructor() {
        super();
        this.stringField = [
            new Required(),
            new MinLength().setShallValue(3),
            new MaxLength().setShallValue(100),
            new BasicAlphaNumSpaceSpecial,
        ],
        this.smallIntegerField = [
            new Required,
            new Integer,
            new MinValue().setShallValue(1),
            new MaxValue().setShallValue(32767),
            new MinLength().setShallValue(1),
            new MaxLength().setShallValue(5)
        ],
        this.integerField = [
            new Required,
            new Integer,
            new MinValue().setShallValue(1),
            new MaxValue().setShallValue(2147483647),
            new MinLength().setShallValue(1),
            new MaxLength().setShallValue(10)
        ],
        this.bigIntegerField = [
            new Required,
            new Integer,
            new MinValue().setShallValue(1),
            new MaxValue().setShallValue(9223372036854775807),
            new MinLength().setShallValue(1),
            new MaxLength().setShallValue(19),
        ],
        this.booleanField = [
            new Required,
            new Bool,
        ],
        this.decimalField = [
            new Required,
            new Float
        ],
        this.floatField = [
            new Required,
            new Float,
        ],
        this.dateField = [
            new Required,
            new DateTime,
        ],
        this.timeField = [
            new Required,
            new TimeFormat,
        ],
        this.dateTimeField = [
            new Required,
            new DateTime,
        ],
        this.textField = [
            new Required,
            new BasicAlphaNumSpaceSpecial,
        ],
        this.arrayOfStringField = [
            new Required,
            new StringArray,
        ],
        this.arrayOfNumberField = [
            new Required,
            new NumberArray
        ],
        this.arrayOfStringOrNumberField = [
            new Required,
            new StringNumberArray
        ],
        this.objectField = [
            new Required,
            new PureObject
        ],
        this.arrayOfObjectField = [
            new Required,
            new ObjectArray
        ],
        this.arrayOfParticularObjectField = [
            new Required,
            new SubEntityObjectArray
        ],
        this.jsonField = [
            new Required,
            new JsonString
        ],
        this.nullField = [
            new Required,
            new Null
        ],
        this.undefinedField = [
            new Required,
            new Undefined
        ]
    }
};