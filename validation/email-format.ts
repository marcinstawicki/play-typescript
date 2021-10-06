import AbstractRegExp from './abstract-reg-exp';

export default class EmailFormat extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = `^[${this.basic_latin_letters}${this.basic_latin_numbers}._%-]+@[${this.basic_latin_letters}${this.basic_latin_numbers}._%-]+\\.[${this.basic_latin_letters}]{2,4}$`;
    this.labelKeys = [
      this.basicLettersLabel,
      this.basicNumbersLabel,
      '._%-',
      'something@domain.com',
    ];
  }
}
