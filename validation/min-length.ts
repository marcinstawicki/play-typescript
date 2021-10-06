import AbstractValidation from './abstract-validation';

export default class MinLength extends AbstractValidation {
  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['minLengthKey'];
  }

  isError() {
    if (!super.isError()) {
      return this.shallValue >= this.isValue.length;
    }
    return true;
  }
}
