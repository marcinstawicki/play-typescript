import AbstractRegExp from './abstract-reg-exp';

export default class Integer extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = `^[${this.basic_latin_numbers}]+$`;
    this.labelKeys = [
      this.basicNumbersLabel,
    ];
  }
}
