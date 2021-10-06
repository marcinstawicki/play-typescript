import AbstractValidation from './abstract-validation';

export default class MaxValue extends AbstractValidation {
  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['maxValueKey'];
  }

  isError() {
    if (!super.isError()) {
      return this.shallValue <= this.isValue;
    }
    return true;
  }
}
