import AbstractValidation from './abstract-validation';

export default class Undefined extends AbstractValidation {
  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['undefinedKey'];
  }

  isError() {
    if (!super.isError()) {
      return typeof this.isValue !== 'undefined';
    }
    return true;
  }
}
