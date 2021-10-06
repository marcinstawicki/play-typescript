import AbstractValidation from './abstract-validation';

export default class BlobObject extends AbstractValidation {

  constructor(value: any = undefined) {
    super(value);
    this.labelKeys = ['blobObjectKey'];
  }

  isError() {
    if (!super.isError()) {
      return !(this.isValue instanceof Blob);
    }
    return true;
  }
}
