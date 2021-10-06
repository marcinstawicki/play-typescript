import AbstractRegExp from './abstract-reg-exp';

export default class PasswordFormat extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$';
    this.labelKeys = [
      this.lowercaseLettersLabel,
      this.uppercaseLettersLabel,
      this.basicNumbersLabel,
      this.basicSpecialCharactersLabel,
      'minCharactersLengthKey',
    ];
  }
}
