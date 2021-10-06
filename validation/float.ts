import AbstractRegExp from './abstract-reg-exp';

export default class Float extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = `^(\\-|\\+)?([0-9]+(\\.[0-9]+)?|Infinity)$`;
    this.labelKeys = [
        'floatKey',
        '0.15'
    ];
  }
}
