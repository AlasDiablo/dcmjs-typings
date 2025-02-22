export class Tag {
    /** Helper method to avoid circular dependencies */
    static setDicomMessageClass(dicomMessageClass: any): void;

    static fromString(str: any): Tag;

    static fromPString(str: any): Tag;

    static fromNumbers(group: any, element: any): Tag;

    static readTag(stream: any): Tag;

    constructor(value: any);

    value: any;

    toString(): string;

    toCleanString(): string;

    is(t: any): boolean;

    group(): number;

    element(): number;

    isPixelDataTag(): boolean;

    isPrivateCreator(): boolean;

    write(stream: any, vrType: any, values: any, syntax: any, writeOptions: any): number;
}
