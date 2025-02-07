import {DicomMessage} from "./DicomMessage";
import {Tag} from "./Tag";
import {ReadBufferStream} from "./BufferStream";
import {PersonValue} from './DicomDict';

export type VRType = 'AE' |
    'AS' |
    'AT' |
    'CS' |
    'DA' |
    'DS' |
    'DT' |
    'FL' |
    'FD' |
    'IS' |
    'LO' |
    'LT' |
    'OB' |
    'OD' |
    'OF' |
    'OW' |
    'PN' |
    'SH' |
    'SL' |
    'SQ' |
    'SS' |
    'ST' |
    'TM' |
    'UC' |
    'UI' |
    'UL' |
    'UN' |
    'UR' |
    'US' |
    'UT';


export class ValueRepresentation {
    static setDicomMessageClass(dicomMessageClass: typeof DicomMessage): void;

    static setTagClass(tagClass: typeof Tag): void;

    /**
     * Replaces a tag with a Proxy which assigns value accessors based on the vr field
     * of the tag being given to it. If the tag object does not have a vr or vr.type
     * property, the proxy will look for the prop name in the natural name map.
     * @param {any} tag object to add accessors to
     * @returns {any} either the same object if no accessor needed, or a Proxy
     */
    static addTagAccessors<T>(tag: T): T;

    static hasValueAccessors(type: unknown): boolean;

    static createByTypeString(type: "AE"): ApplicationEntity;
    static createByTypeString(type: "AS"): AgeString;
    static createByTypeString(type: "AT"): AttributeTag;
    static createByTypeString(type: "CS"): CodeString;
    static createByTypeString(type: "DA"): DateValue;
    static createByTypeString(type: "DS"): DecimalString;
    static createByTypeString(type: "DT"): DateTime;
    static createByTypeString(type: "FL"): FloatingPointSingle;
    static createByTypeString(type: "FD"): FloatingPointDouble;
    static createByTypeString(type: "IS"): IntegerString;
    static createByTypeString(type: "LO"): LongString;
    static createByTypeString(type: "LT"): LongText;
    static createByTypeString(type: "OB"): OtherByteString;
    static createByTypeString(type: "OD"): OtherDoubleString;
    static createByTypeString(type: "OF"): OtherFloatString;
    static createByTypeString(type: "OW"): OtherWordString;
    static createByTypeString(type: "PN"): PersonName;
    static createByTypeString(type: "SH"): ShortString;
    static createByTypeString(type: "SL"): SignedLong;
    static createByTypeString(type: "SQ"): SequenceOfItems;
    static createByTypeString(type: "SS"): SignedShort;
    static createByTypeString(type: "ST"): ShortText;
    static createByTypeString(type: "TM"): TimeValue;
    static createByTypeString(type: "UC"): UnlimitedCharacters;
    static createByTypeString(type: "UI"): UniqueIdentifier;
    static createByTypeString(type: "UL"): UnsignedLong;
    static createByTypeString(type: "UN"): UnknownValue;
    static createByTypeString(type: "UR"): UniversalResource;
    static createByTypeString(type: "US"): UnsignedShort;
    static createByTypeString(type: "UT"): UnlimitedText;

    static parseUnknownVr(type: unknown): ParsedUnknownValue;

    constructor(type: VRType);

    type: VRType;
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

    read(stream: ReadBufferStream, length: any, syntax: string, readOptions?: {
        forceStoreRaw: boolean;
    }): any;

    applyFormatting<T>(value: T): T;

    readBytes(stream: ReadBufferStream, length: any): any;

    readPaddedAsciiString(stream: ReadBufferStream, length: any): any;

    readPaddedEncodedString(stream: ReadBufferStream, length: any): any;

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

    readBytes(stream: ReadBufferStream, length: any): Uint8Array[];
}

class AsciiStringRepresentation extends ValueRepresentation {}
class EncodedStringRepresentation extends ValueRepresentation {}
class NumericStringRepresentation extends AsciiStringRepresentation {}

// AE
class ApplicationEntity extends AsciiStringRepresentation {
    applyFormatting(value: string): string;
}
// AS
class AgeString extends AsciiStringRepresentation {}
// AT
class AttributeTag extends AsciiStringRepresentation {}
// CS
class CodeString extends AsciiStringRepresentation {
    applyFormatting(value: string): string;
    applyFormatting(value: string[]): string[];
    applyFormatting(value: string | string[]): string |string[];
}
// DA
class DateValue extends AsciiStringRepresentation {}
// DS
class DecimalString extends NumericStringRepresentation {
    applyFormatting(value: string): number | null;
    applyFormatting(value: string[]): (number | null)[];
    applyFormatting(value: string | string[]): (number | null) | (number | null)[];
}
// DT
class DateTime extends AsciiStringRepresentation {}
// FL
class FloatingPointSingle extends ValueRepresentation {
    applyFormatting(value: string): number;
}
// FD
class FloatingPointDouble extends ValueRepresentation {
    applyFormatting(value: string): number;
}
// IS
class IntegerString extends NumericStringRepresentation {
    applyFormatting(value: string): number | null;
    applyFormatting(value: string[]): (number | null)[];
    applyFormatting(value: string | string[]): (number | null) | (number | null)[];
}
// LO
class LongString extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}
// LT
class LongText extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}
// OB
class OtherByteString extends BinaryRepresentation {}
// OD
class OtherDoubleString extends BinaryRepresentation {}
// OF
class OtherFloatString extends BinaryRepresentation {}
// OW
class OtherWordString extends BinaryRepresentation {}
// PN
class PersonName extends EncodedStringRepresentation {
    applyFormatting(value: string | PersonValue): PersonValue;
    applyFormatting(value: string[] | PersonValue[]): PersonValue[];
    applyFormatting(value: string | string[] | PersonValue | PersonValue[]): PersonValue | PersonValue[];
}
// SH
class ShortString extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}
// SL
class SignedLong extends ValueRepresentation {}
// SQ
class SequenceOfItems extends ValueRepresentation {}
// SS
class SignedShort extends ValueRepresentation {}
// ST
class ShortText extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}
// TM
class TimeValue extends AsciiStringRepresentation {
    applyFormatting(value: string): string;
}
// UC
class UnlimitedCharacters extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}
// UI
class UniqueIdentifier extends AsciiStringRepresentation {
    applyFormatting(value: string): string;
    applyFormatting(value: string[]): string[];
    applyFormatting(value: string | string[]): string | string[];
}
// UL
class UnsignedLong extends ValueRepresentation {}
// UN
class UnknownValue extends BinaryRepresentation {}
// UR
class UniversalResource extends AsciiStringRepresentation {}
// US
class UnsignedShort extends ValueRepresentation {}
// UT
class UnlimitedText extends EncodedStringRepresentation {
    applyFormatting(value: string): string;
}

