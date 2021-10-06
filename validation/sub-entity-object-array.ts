import AbstractValidation from './abstract-validation';
import { SubEntityInterface } from "../interfaces";

export default class SubEntityObjectArray extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['subEntityObjectKey'];
  }

  isError() {
    if (!super.isError()) {
      type SubEntityOrAny = SubEntityInterface | any;
      const isSubEntityInterface = (SubEntityOrNot: SubEntityOrAny): SubEntityOrNot is SubEntityInterface => {
        const forcedSubEntityInterface = SubEntityOrNot as SubEntityInterface;
        if(forcedSubEntityInterface.id && forcedSubEntityInterface.stringField){
          return true
        }
        return false;
      }
      return !this.isValue.every((dataSet: SubEntityInterface) => {
            return isSubEntityInterface(dataSet);
          }
      );
    }
    return true;
  }
}
