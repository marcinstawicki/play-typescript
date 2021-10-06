import AbstractValidation from "./validation/abstract-validation";

export interface SimpleObjectInterface {
    someKey: string | number;
}
export interface ValidationConstructorInterface {
    new(value: any): AbstractValidation;
}
export interface MainEntityInterface {
    id?: number | undefined,
    stringField: string,
    smallIntegerField: number,
    integerField: number,
    bigIntegerField: number,
    booleanField: boolean,
    decimalField: number,
    floatField: number,
    dateField: string,
    timeField: string,
    dateTimeField: string,
    textField: string,
    arrayOfStringField: string[],
    arrayOfNumberField: number[],
    arrayOfStringOrNumberField: (string | number)[],
    objectField: SimpleObjectInterface,
    arrayOfObjectField: SimpleObjectInterface[],
    arrayOfParticularObjectField: SubEntityInterface[],
    jsonField: string,
    nullField: null
    undefinedField: undefined
}
export interface SubEntityInterface {
    id: number,
    stringField: string
}
export interface TranslationDataInterface {
    key: string,
    en: string,
    de: string,
    pl: string
}
export type supportedCodes = ('en' | 'de' | 'pl');
export interface ValidationInterface {
    isValue: any,
    labelKeys: string[],
    shallValue: any,
    isError(): boolean,
    setIsValue(value: any): this,
    setShallValue(value: any): this
}

