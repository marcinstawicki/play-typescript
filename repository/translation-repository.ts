import { supportedCodes, TranslationDataInterface} from "../interfaces";

export class TranslationRepository {

    protected data: TranslationDataInterface[];

    constructor() {
        this.data = [
            {
                key: 'noValueKey',
                en: 'no value',
                de: 'kein Wert',
                pl: 'brak wartości'
            },
            {
                key: 'basicLettersKey',
                en: 'english letters',
                de: 'englische Buchstaben',
                pl: 'angielskie litery'
            },
            {
                key: 'digitsKey',
                en: 'digits',
                de: 'Zahlen',
                pl: 'cyfry'
            },
            {
                key: 'spaceKey',
                en: 'space',
                de: 'Leerzeichen',
                pl: 'spacja'
            },
            {
                key: 'lowercaseLettersKey',
                en: 'lower-case letters',
                de: 'Kleinbuchstaben',
                pl: 'małe litery'
            },
            {
                key: 'uppercaseLettersKey',
                en: 'upper-case letters',
                de: 'Großbuchstaben',
                pl: 'duże litery'
            },
            {
                key: 'maxLengthKey',
                en: 'maximum length',
                de: 'maximale Länge',
                pl: 'maksymalna długość'
            },
            {
                key: 'minLengthKey',
                en: 'minimum length',
                de: 'minimale Länge',
                pl: 'minimalna długość wartości'
            },
            {
                key: 'maxValueKey',
                en: 'maximum value',
                de: 'maximaler Wert',
                pl: 'maksymalna wartość'
            },
            {
                key: 'minValueKey',
                en: 'minimum value',
                de: 'minimaler Wert',
                pl: 'minimalna wartość'
            }
        ];
    }
    getByKey(key: string, langCode: supportedCodes): any {
        const record = this.data.find((row: TranslationDataInterface) => row.key === key);
        return typeof record === 'undefined' ? `[... ${key} ...]` : record[langCode];
    }
}



