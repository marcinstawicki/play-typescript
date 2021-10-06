import AbstractValidation from './abstract-validation';

export default class ObjectArray extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['objectArrayKey'];
  }

  isError() {
    if (!super.isError()) {
      return !this.isValue.every((elem: any) => typeof elem === 'object' && elem !== null && elem.constructor === Object);
    }
    return true;
  }
}
