import AbstractRegExp from './abstract-reg-exp';

export default class TimeFormat extends AbstractRegExp {

  constructor(value: any = undefined) {
    super(value);
    this.shallValue = `^(?:(?:([01]?\\d|2[0-3]):)?([0-5]?\\d):)?([0-5]?\\d)$`;
    this.labelKeys = [
      'timeKey',
      '59:59:59',
      'h:m:s',
    ];
  }
}
