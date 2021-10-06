import AbstractEntity from "./abstract-entity";
import {
    Required,
    MinLength,
    MaxLength,
    BasicAlphaNumSpaceSpecial,
} from "../validation";

export default class SubEntity extends AbstractEntity {
    protected stringField: any[];

    constructor() {
        super();
        this.stringField = [
            new Required(),
            new MinLength().setShallValue(3),
            new MaxLength().setShallValue(100),
            new BasicAlphaNumSpaceSpecial
        ]
    }
};