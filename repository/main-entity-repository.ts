import { SubEntityRepository } from "./sub-entity-repository"
import AbstractRepository from "./abstract-repository";
import { MainEntityInterface } from "../interfaces";

const subRepository = new SubEntityRepository();
const SubEntity0 = subRepository.getById(1);
const SubEntity1 = subRepository.getById(2);
const SubEntity2 = subRepository.getById(3);

export class MainEntityRepository extends AbstractRepository {

    protected data: MainEntityInterface[];

    constructor() {
        super();
        this.id = 3;
        this.data = [
            {
                id: 1,
                stringField: 'stringValue',
                smallIntegerField: 100,
                integerField: 10000000,
                bigIntegerField: 100000000000,
                booleanField: true,
                decimalField: 100.10,
                floatField: 100.100,
                dateField: '2021-09-21',
                timeField: '10:11:46',
                dateTimeField: '2021-09-21 10:11:46',
                textField: 'textValue',
                arrayOfStringField: ['stringValue', 'stringValue'],
                arrayOfNumberField: [1,2,3,4,5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: {someKey: 'someStringValue'},
                arrayOfObjectField: [{someKey: 'someStringValue'}, {someKey: 'someStringValue'}],
                arrayOfParticularObjectField: [SubEntity0, SubEntity1, SubEntity2],
                jsonField: '{"someKey":"someValue"}',
                nullField: null,
                undefinedField: undefined,
            },
            {
                id: 2,
                stringField: 'stringValue',
                smallIntegerField: 100,
                integerField: 10000000,
                bigIntegerField: 100000000000,
                booleanField: true,
                decimalField: 100.10,
                floatField: 100.100,
                dateField: '2021-09-21',
                timeField: '10:11:46',
                dateTimeField: '2021-09-21 10:11:46',
                textField: 'textValue',
                arrayOfStringField: ['stringValue', 'stringValue'],
                arrayOfNumberField: [1,2,3,4,5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: {someKey: 'someStringValue'},
                arrayOfObjectField: [{someKey: 'someStringValue'}, {someKey: 'someStringValue'}],
                arrayOfParticularObjectField: [SubEntity0, SubEntity1, SubEntity2],
                jsonField: '{"someKey":"someValue"}',
                nullField: null,
                undefinedField: undefined,
            },
            {
                id: 3,
                stringField: 'stringValue',
                smallIntegerField: 100,
                integerField: 10000000,
                bigIntegerField: 100000000000,
                booleanField: true,
                decimalField: 100.10,
                floatField: 100.100,
                dateField: '2021-09-21',
                timeField: '10:11:46',
                dateTimeField: '2021-09-21 10:11:46',
                textField: 'textValue',
                arrayOfStringField: ['stringValue', 'stringValue'],
                arrayOfNumberField: [1,2,3,4,5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: {someKey: 'someStringValue'},
                arrayOfObjectField: [{someKey: 'someStringValue'}, {someKey: 'someStringValue'}],
                arrayOfParticularObjectField: [SubEntity0, SubEntity1, SubEntity2],
                jsonField: '{"someKey":"someValue"}',
                nullField: null,
                undefinedField: undefined,
            }
        ];
    }
};


