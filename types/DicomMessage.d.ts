import {ReadBufferStream} from "./BufferStream";
import {DicomDict} from "./DicomDict";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class DicomMessage {
    static read(
        bufferStream: ReadBufferStream,
        syntax: string,
        ignoreErrors: boolean,
        untilTag?: string | null,
        includeUntilTagValue?: boolean
    ): DicomDict["dict"];

    static readTag(
        bufferStream: ReadBufferStream,
        syntax: string,
        untilTag?: string | null,
        includeUntilTagValue?: boolean
    ): any;

    static _read(
        bufferStream: ReadBufferStream,
        syntax: string,
        options?: {
            ignoreErrors: boolean;
            untilTag: string | null;
            includeUntilTagValue: boolean;
        }
    ): DicomDict["dict"];

    static _normalizeSyntax(syntax: string): string;

    static isEncapsulated(syntax: string): boolean;

    static readFile(
        buffer: ArrayBuffer,
        options?: {
            ignoreErrors: boolean;
            untilTag: string | null;
            includeUntilTagValue: boolean;
            noCopy: boolean;
            forceStoreRaw: boolean;
        }
    ): DicomDict;

    static writeTagObject(
        stream: any,
        tagString: any,
        vr: any,
        values: any,
        syntax: any,
        writeOptions: any
    ): void;

    static write(
        jsonObjects: any,
        useStream: any,
        syntax: any,
        writeOptions: any
    ): number;

    static _getTagWriteValues(vrType: any, tagObject: any): any;

    static _readTag(
        stream: ReadBufferStream,
        syntax: string,
        options?: {
            untilTag: string | null;
            includeUntilTagValue: boolean;
        }
    ): any;

    static lookupTag(tag: any): any;
}
