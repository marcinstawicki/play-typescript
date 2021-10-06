"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_entity_repository_1 = require("./repository/main-entity-repository");
const sub_entity_repository_1 = require("./repository/sub-entity-repository");
const main_entity_1 = __importDefault(require("./entity/main-entity"));
const translation_repository_1 = require("./repository/translation-repository");
const trans = new translation_repository_1.TranslationRepository();
const env_1 = require("./env");
/**
 * define new dataset (usually coming from a http request: FORM or API -> POST/GET/PUT/DELETE)
 */
const subRepository = new sub_entity_repository_1.SubEntityRepository();
const SubEntity0 = subRepository.getById(1);
const SubEntity1 = subRepository.getById(2);
const SubEntity2 = subRepository.getById(3);
const dataSet = {
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
    arrayOfNumberField: [1, 2, 3, 4, 5],
    arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
    objectField: { someKey: 'someStringValue' },
    arrayOfObjectField: [{ someKey: 'someStringValue' }, { someKey: 'someStringValue' }],
    arrayOfParticularObjectField: [SubEntity0, SubEntity1, SubEntity2],
    jsonField: '{"someKey":"someValue"}',
    nullField: null,
    undefinedField: undefined
};
/**
 * validate
 */
const MainEntityInstance = new main_entity_1.default();
let errors = false;
for (let key in dataSet) {
    if (key in MainEntityInstance) {
        const value = dataSet[key];
        MainEntityInstance[key].some((validation) => {
            validation.setIsValue(value);
            if (validation.isError()) {
                const error = validation.labelKeys.map((langKey) => trans.getByKey(langKey, env_1.langCode));
                console.log(`${key} -> error: ${error} -> current value: ${value}`);
                errors = true;
            }
        });
    }
}
if (!errors) {
    const mainEntityRepo = new main_entity_repository_1.MainEntityRepository();
    /**
     * insert (create)
     */
    let id = mainEntityRepo.set(dataSet);
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
    id = mainEntityRepo.set(dataSet, id);
    let updatedRow = mainEntityRepo.getById(id);
    console.log('******************************* read updated row by id');
    console.log(updatedRow);
    updatedRow = mainEntityRepo.getByValue({ stringField: 'stringValueUpdated' });
    console.log('******************************* read updated row by value');
    console.log(updatedRow);
    /**
     * delete
     */
    id = mainEntityRepo.set({}, id);
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
//# sourceMappingURL=index.js.map