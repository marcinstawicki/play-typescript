import {SimpleObjectInterface} from "../interfaces";

export default abstract class AbstractRepository {

  protected data: any[];
  protected id: number;

  protected constructor() {
    this.data = [];
    this.id = 0;
  }

  getById(id: number): any {
    return this.data.find((row: any) => id === row.id);
  }

  getByValue(param?: {[key:string]: any}): any {
    if(typeof param !== 'undefined'){
      const key = Object.keys(param)[0];
      return this.data.filter((row: any) => row[key] === param[key]);
    }
    return this.data;
  }

  set(data: any, id?: number): number {
    if (typeof id === 'undefined') {
      id = ++this.id;
      data.id = id;
      this.data.push({...data});
    } else {
      const record = this.getById(id);
      const index = this.data.indexOf(record);
      if(data === {}) {
        this.data.slice(index,1);
      } else {
        this.data[index] = {...data};
      }
    }
    return id;
  }
}
