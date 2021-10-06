"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEntityRepository = void 0;
const sub_entity_repository_1 = require("./sub-entity-repository");
const abstract_repository_1 = __importDefault(require("./abstract-repository"));
const subRepository = new sub_entity_repository_1.SubEntityRepository();
const SubEntity0 = subRepository.getById(1);
const SubEntity1 = subRepository.getById(2);
const SubEntity2 = subRepository.getById(3);
class MainEntityRepository extends abstract_repository_1.default {
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
                arrayOfNumberField: [1, 2, 3, 4, 5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: { someKey: 'someStringValue' },
                arrayOfObjectField: [{ someKey: 'someStringValue' }, { someKey: 'someStringValue' }],
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
                arrayOfNumberField: [1, 2, 3, 4, 5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: { someKey: 'someStringValue' },
                arrayOfObjectField: [{ someKey: 'someStringValue' }, { someKey: 'someStringValue' }],
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
                arrayOfNumberField: [1, 2, 3, 4, 5],
                arrayOfStringOrNumberField: ['stringValue', 1, 2, 'stringValue', 3],
                objectField: { someKey: 'someStringValue' },
                arrayOfObjectField: [{ someKey: 'someStringValue' }, { someKey: 'someStringValue' }],
                arrayOfParticularObjectField: [SubEntity0, SubEntity1, SubEntity2],
                jsonField: '{"someKey":"someValue"}',
                nullField: null,
                undefinedField: undefined,
            }
        ];
    }
}
exports.MainEntityRepository = MainEntityRepository;
;
//# sourceMappingURL=main-entity-repository.js.map