export class Code {
    constructor(options: any);

    get value(): any;

    get meaning(): any;

    get schemeDesignator(): any;

    get schemeVersion(): any;

    [_value]: any;
    [_meaning]: any;
    [_schemeDesignator]: any;
    [_schemeVersion]: any;
}

export class CodedConcept {
    constructor(options: any);

    CodeValue: any;
    CodeMeaning: any;
    CodingSchemeDesignator: any;
    CodingSchemeVersion: any;

    equals(other: any): boolean;

    get value(): any;

    get meaning(): any;

    get schemeDesignator(): any;

    get schemeVersion(): any;
}

declare const _value: unique symbol;
declare const _meaning: unique symbol;
declare const _schemeDesignator: unique symbol;
declare const _schemeVersion: unique symbol;
export {};
