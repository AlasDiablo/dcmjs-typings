import {DicomMessage} from "./DicomMessage";
import {VRType} from "./ValueRepresentation";

export interface PersonValue {
    Alphabetic?: string;
    Ideographic?: string;
    Phonetic?: string;
}

type DictSubDictEntry = Record<string, DictEntry>;

export type DictEntryValue = object | string | number | DictSubDictEntry | PersonValue;

export interface DictEntry {
    Value: DictEntryValue[];
    _rawValue: unknown;
    vr: VRType;
}

export type Dict = Record<string, DictEntry>;

export class DicomDict {
    /** Helper method to avoid circular dependencies */
    static setDicomMessageClass(dicomMessageClass: typeof DicomMessage): void;

    constructor(meta: any);

    meta: any;
    dict: Dict;

    upsertTag(tag: string, vr: any, values: unknown): void;

    write(writeOptions?: {
        allowInvalidVRLength: boolean;
    }): ArrayBuffer;
}
