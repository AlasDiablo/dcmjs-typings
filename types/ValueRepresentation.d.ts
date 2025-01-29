export class ValueRepresentation {
    static setDicomMessageClass(dicomMessageClass: any): void;
    static setTagClass(tagClass: any): void;
    /**
     * Replaces a tag with a Proxy which assigns value accessors based on the vr field
     * of the tag being given to it. If the tag object does not have a vr or vr.type
     * property, the proxy will look for the prop name in the natural name map.
     * @param {any} tag object to add accessors to
     * @returns {any} either the same object if no accessor needed, or a Proxy
     */
    static addTagAccessors(tag: any): any;
    static hasValueAccessors(type: any): boolean;
    static createByTypeString(type: any): any;
    static parseUnknownVr(type: any): ParsedUnknownValue;
    constructor(type: any);
    type: any;
    multi: boolean;
    _isBinary: boolean;
    _allowMultiple: boolean;
    _isExplicit: boolean;
    _storeRaw: boolean;
    isBinary(): boolean;
    allowMultiple(): boolean;
    isExplicit(): boolean;
    /**
     * Flag that specifies whether to store the original unformatted value that is read from the dicom input buffer.
     * The `_rawValue` is used for lossless round trip processing, which preserves data (whitespace, special chars) on write
     * that may be lost after casting to other data structures like Number, or applying formatting for readability.
     *
     * Example DecimalString: _rawValue: ["-0.000"], Value: [0]
     */
    storeRaw(): boolean;
    addValueAccessors(value: any): any;
    /**
     * Removes padding byte, if it exists, from the last value in a multiple-value data element.
     *
     * This function ensures that data elements with multiple values maintain their integrity for lossless
     * read/write operations. In cases where the last value of a multi-valued data element is at the maximum allowed length,
     * an odd-length total can result in a padding byte being added. This padding byte, can cause a length violation
     * when writing back to the file. To prevent this, we remove the padding byte if it is the only additional character
     * in the last element. Otherwise, it leaves the values as-is to minimize changes to the original data.
     *
     * @param {string[]} values - An array of strings representing the values of a DICOM data element.
     * @returns {string[]} The modified array, with the padding byte potentially removed from the last value.
     */
    dropPadByte(values: string[]): string[];
    read(stream: any, length: any, syntax: any, readOptions?: {
        forceStoreRaw: boolean;
    }): any;
    applyFormatting(value: any): any;
    readBytes(stream: any, length: any): any;
    readPaddedAsciiString(stream: any, length: any): any;
    readPaddedEncodedString(stream: any, length: any): any;
    write(stream: any, type: any, ...args: any[]): any[];
    writeBytes(stream: any, value: any, lengths: any, writeOptions?: {
        allowInvalidVRLength: boolean;
    }): number;
}
declare class ParsedUnknownValue extends BinaryRepresentation {
    maxLength: any;
    padByte: number;
    noMultiple: boolean;
    read(stream: any, length: any, syntax: any, readOptions: any): any;
}
declare class BinaryRepresentation extends ValueRepresentation {
    writeBytes(stream: any, value: any, syntax: any, isEncapsulated: any, writeOptions?: {}): number;
    readBytes(stream: any, length: any): any[];
}
export {};
