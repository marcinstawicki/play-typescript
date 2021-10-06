"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractRepository {
    constructor() {
        this.data = [];
        this.id = 0;
    }
    getById(id) {
        return this.data.find((row) => id === row.id);
    }
    getByValue(param) {
        if (typeof param !== 'undefined') {
            const key = Object.keys(param)[0];
            return this.data.filter((row) => row[key] === param[key]);
        }
        return this.data;
    }
    set(data, id) {
        if (typeof id === 'undefined') {
            id = ++this.id;
            data.id = id;
            this.data.push(Object.assign({}, data));
        }
        else {
            const record = this.getById(id);
            const index = this.data.indexOf(record);
            if (data === {}) {
                this.data.slice(index, 1);
            }
            else {
                this.data[index] = Object.assign({}, data);
            }
        }
        return id;
    }
}
exports.default = AbstractRepository;
//# sourceMappingURL=abstract-repository.js.map