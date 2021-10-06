import AbstractValidation from './abstract-validation';

export default class PureObject extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['pureObjectKey'];
  }

  isError() {
    if (!super.isError()) {
      return !(typeof this.isValue === 'object' && this.isValue !== null && this.isValue.constructor === Object);
    }
    return true;
  }
}
