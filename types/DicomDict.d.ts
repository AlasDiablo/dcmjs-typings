import {DicomMessage} from "./DicomMessage";

export interface DictEntry {
    Value: unknown;
    _rawValue: unknown;
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
