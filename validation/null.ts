import AbstractValidation from './abstract-validation';

export default class Null extends AbstractValidation {
  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['nullKey'];
  }

  isError() {
    if (!super.isError()) {
      return this.isValue !== null;
    }
    return true;
  }
}
