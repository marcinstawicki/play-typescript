import AbstractValidation from './abstract-validation';

export default class StringNumberArray extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['stringNumberArrayKey'];
  }

  isError() {
    if (!super.isError()) {
      return !this.isValue.every((elem: any) => typeof elem === 'string' || typeof elem === 'number');
    }
    return true;
  }
}
