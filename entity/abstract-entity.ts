import Required from "../validation/required";
import Integer from "../validation/integer";
import MinValue from "../validation/min-value";
import { ValidationInterface } from "../interfaces";

export default abstract class AbstractEntity {
  protected id: ValidationInterface[];
  protected constructor() {
    this.id = [
        new Integer()
    ];
  }
}
