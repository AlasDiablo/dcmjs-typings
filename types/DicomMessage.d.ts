export class DicomMessage {
    static read(bufferStream: any, syntax: any, ignoreErrors: any, untilTag?: any, includeUntilTagValue?: boolean): {};
    static readTag(bufferStream: any, syntax: any, untilTag?: any, includeUntilTagValue?: boolean): any;
    static _read(bufferStream: any, syntax: any, options?: {
        ignoreErrors: boolean;
        untilTag: any;
        includeUntilTagValue: boolean;
    }): {};
    static _normalizeSyntax(syntax: any): any;
    static isEncapsulated(syntax: any): boolean;
    static readFile(buffer: any, options?: {
        ignoreErrors: boolean;
        untilTag: any;
        includeUntilTagValue: boolean;
        noCopy: boolean;
        forceStoreRaw: boolean;
    }): DicomDict;
    static writeTagObject(stream: any, tagString: any, vr: any, values: any, syntax: any, writeOptions: any): void;
    static write(jsonObjects: any, useStream: any, syntax: any, writeOptions: any): number;
    static _getTagWriteValues(vrType: any, tagObject: any): any;
    static _readTag(stream: any, syntax: any, options?: {
        untilTag: any;
        includeUntilTagValue: boolean;
    }): any;
    static lookupTag(tag: any): any;
}
import { DicomDict } from "./DicomDict.js";
