import AbstractValidation from './abstract-validation';

export default class StringArray extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['stringArrayKey'];
  }

  isError() {
    if (!super.isError()) {
      return !this.isValue.every((elem: any) => typeof elem === 'string');
    }
    return true;
  }
}
