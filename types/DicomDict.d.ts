export class DicomDict {
    /** Helper method to avoid circular dependencies */
    static setDicomMessageClass(dicomMessageClass: any): void;

    constructor(meta: any);

    meta: any;
    dict: {};

    upsertTag(tag: any, vr: any, values: any): void;

    write(writeOptions?: {
        allowInvalidVRLength: boolean;
    }): any;
}
