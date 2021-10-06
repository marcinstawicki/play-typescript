import AbstractRegExp from './abstract-reg-exp';

export default class BasicAlphaNumSpaceSpecial extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = `^[${this.basic_latin_letters}${this.space}${this.basic_latin_numbers}${this.basic_latin_special_characters}]+$`;
    this.labelKeys = [
      this.basicLettersLabel,
      this.spaceLabel,
      this.basicNumbersLabel,
      this.basicSpecialCharactersLabel,
    ];
  }
}
