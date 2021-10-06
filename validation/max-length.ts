import AbstractValidation from './abstract-validation';

export default class MaxLength extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['maxLengthKey'];
  }

  isError() {
    if (!super.isError()) {
      return this.shallValue <= this.isValue.length;
    }
    return true;
  }
}
