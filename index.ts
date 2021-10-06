import {MainEntityRepository} from "./repository/main-entity-repository";
import {SubEntityRepository} from "./repository/sub-entity-repository";
import {MainEntityInterface, SubEntityInterface, ValidationInterface} from "./interfaces";
import MainEntity from "./entity/main-entity";
import {TranslationRepository} from "./repository/translation-repository";
const trans = new TranslationRepository();
import {langCode} from './env';
/**
 * define new dataset (usually coming from a http request: FORM or API -> POST/GET/PUT/DELETE)
 */
const subRepository = new SubEntityRepository();
const SubEntity0: SubEntityInterface = subRepository.getById(1);
const SubEntity1: SubEntityInterface = subRepository.getById(2);
const SubEntity2: SubEntityInterface = subRepository.getById(3);

const dataSet =  {
    id: 0,
    stringField: 'stringValue',
    smallIntegerField: 100,
    integerField: 10000000,
    bigIntegerField: 100000000000,
    booleanField: true,
    decimalField: 100.00,
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
    undefinedField: undefined
};
/**
 * validate
 */
const MainEntityInstance = new MainEntity();
let errors = false;
for(let key in dataSet){
    if (key in MainEntityInstance) {
        const value = dataSet[key as keyof MainEntityInterface];
        MainEntityInstance[key as keyof MainEntityInterface].some((validation: ValidationInterface) => {
            validation.setIsValue(value);
            if (validation.isError()) {
                const error = validation.labelKeys.map((langKey: string) => trans.getByKey(langKey,langCode));
                console.log(`${key} -> error: ${error} -> current value: ${value}`);
                errors = true;
            }
        });
    }
}

if(!errors){
    const mainEntityRepo: MainEntityRepository = new MainEntityRepository();
    /**
     * insert (create)
     */
    let id: number = mainEntityRepo.set(dataSet);
    console.log('******************************* last ID: after insert');
    console.log(id);
    /**
     * select (read one row)
     */
    const newRow = mainEntityRepo.getById(id);
    console.log('******************************* read one row by id');
    console.log(newRow);
    /**
     * select (read all rows)
     */
    let rows = mainEntityRepo.getByValue();
    console.log('******************************* read all rows');
    console.log(rows);
    /**
     * update
     */
    dataSet.stringField = 'stringValueUpdated';
    id = mainEntityRepo.set(dataSet,id);
    let updatedRow = mainEntityRepo.getById(id);
    console.log('******************************* read updated row by id');
    console.log(updatedRow);
    updatedRow = mainEntityRepo.getByValue({stringField: 'stringValueUpdated'});
    console.log('******************************* read updated row by value');
    console.log(updatedRow);
    /**
     * delete
     */
    id = mainEntityRepo.set({},id);
    rows = mainEntityRepo.getByValue();
    console.log('******************************* read all rows after deleting');
    console.log(rows);
    /**
     * create another main entity record
     */
    id = mainEntityRepo.set(dataSet);
    console.log('******************************* last ID: after insert');
    console.log(id);
}

