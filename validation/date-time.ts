import AbstractValidation from './abstract-validation';

export default class DateTime extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['dateTimeKey'];
  }

  isError() {
    if (!super.isError()) {
      return new Date(this.isValue).toString() === 'Invalid Date';
    }
    return true;
  }
}
