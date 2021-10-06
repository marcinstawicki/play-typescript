"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubEntityRepository = void 0;
const abstract_repository_1 = __importDefault(require("./abstract-repository"));
class SubEntityRepository extends abstract_repository_1.default {
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
        ];
    }
}
exports.SubEntityRepository = SubEntityRepository;
//# sourceMappingURL=sub-entity-repository.js.map