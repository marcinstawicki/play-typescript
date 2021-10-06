import AbstractValidation from './abstract-validation';

export default abstract class AbstractRegExp extends AbstractValidation {

  protected basic_latin_letters:string;
  protected basicLettersLabel:string;
  protected basic_latin_numbers:string;
  protected basicNumbersLabel:string;
  protected basic_latin_special_characters:string;
  protected basicSpecialCharactersLabel:string;
  protected space:string;
  protected spaceLabel:string;
  protected lowercaseLettersLabel:string;
  protected uppercaseLettersLabel:string;

  protected constructor(value: any = undefined) {
    super(value);
    this.basic_latin_letters = '\\u0041-\\u005A\\u006-\\u007A';
    this.basicLettersLabel = 'basicLettersKey';
    this.basic_latin_numbers = '\\u0030-\\u0039';
    this.basicNumbersLabel = 'digitsKey';
    this.basic_latin_special_characters = '\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E';
    this.basicSpecialCharactersLabel = '!"#$%&\\\'()*+,-./  :,<=>?@  [\\]^_  {|}~';
    this.space = '\\u0020';
    this.spaceLabel = 'spaceKey';
    this.lowercaseLettersLabel = 'lowercaseLettersKey';
    this.uppercaseLettersLabel = 'uppercaseLettersKey';
  }

  isError() {
    if (!super.isError()) {
      if (typeof this.shallValue === 'string') {
        this.shallValue = [this.shallValue];
      }
      const errors = this.shallValue.filter((shallValue: any) => {
        const reg = new RegExp(shallValue);
        const result = reg.test(this.isValue);
        return !result;
      });
      return this.shallValue.length === errors.length;
    }
    return true;
  }
}
