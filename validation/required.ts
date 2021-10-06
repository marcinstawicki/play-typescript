import AbstractValidation from './abstract-validation';

export default class Required extends AbstractValidation {
    constructor(value: any = undefined) {
        super(value);
    }
}