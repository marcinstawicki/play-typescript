import { ValidationInterface } from "../interfaces";

export default abstract class AbstractValidation implements ValidationInterface {

  isValue: any;
  labelKeys: string[];
  shallValue: any;

  constructor(value: any = undefined) {
    this.labelKeys = [];
    if(typeof value !== 'undefined'){
      this.isValue = value;
    }
    this.shallValue = null;
  }

  public isError(): boolean {
    if (this.isValue === '' ||
        this.isValue === {} ||
        this.isValue === []
    ) {
      this.labelKeys = ['noValueKey'];
      return true;
    }
    return false;
  }

  public setIsValue(value: any): this {
    this.isValue = value;
    return this;
  }

  public setShallValue(value: any): this {
    this.shallValue = value;
    return this;
  }
}
