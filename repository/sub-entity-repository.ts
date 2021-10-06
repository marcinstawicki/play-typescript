import AbstractRepository from "./abstract-repository";
import { SubEntityInterface } from "../interfaces";

export class SubEntityRepository extends AbstractRepository {

    protected data: SubEntityInterface[];

    constructor() {
        super();
        this.id = 3;
        this.data = [
            {
                id: 1,
                stringField: 'stringValue',
            },
            {
                id: 2,
                stringField: 'stringValue',
            },
            {
                id: 3,
                stringField: 'stringValue',
            },
        ]
    }
}



