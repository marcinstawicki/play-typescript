import AbstractValidation from './abstract-validation';

export default class Bool extends AbstractValidation {
  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['booleanKey'];
  }

  isError() {
    if (!super.isError()) {
      return typeof this.isValue !== 'boolean';
    }
    return true;
  }
}
