import AbstractValidation from './abstract-validation';

export default class NumberArray extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['numberArrayKey'];
  }

  isError() {
    if (!super.isError()) {
      return !this.isValue.every((elem: any) => typeof elem === 'number');
    }
    return true;
  }
}
