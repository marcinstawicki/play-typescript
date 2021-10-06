import AbstractValidation from './abstract-validation';

export default class JsonString extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['jsonStringKey'];
  }

  isError() {
    if (!super.isError()) {
      let result = false;
      if(typeof this.isValue === 'string'){
        try {
          JSON.parse(this.isValue);
          result = false;
        } catch (e) {
          result = true;
        }
      }
      return result;
    }
    return true;
  }
}
