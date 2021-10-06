import AbstractValidation from './abstract-validation';

export default class MinValue extends AbstractValidation {

   constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['minValueKey'];
  }

  isError() {
    if (!super.isError()) {
      return this.shallValue >= this.isValue;
    }
    return true;
  }
}
