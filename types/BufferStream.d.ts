export class ReadBufferStream extends BufferStream {
    constructor(buffer: any, littleEndian: any, options?: {
        start: any;
        stop: any;
        noCopy: boolean;
    });
    offset: any;
    size: any;
    noCopy: boolean;
    startOffset: any;
    endOffset: any;
    decoder: TextDecoder;
    setDecoder(decoder: any): void;
    reset(): this;
    writeUint8(value: any): void;
    writeUint8Repeat(value: any, count: any): void;
    writeInt8(value: any): void;
    writeUint16(value: any): void;
    writeTwoUint16s(value: any): void;
    writeInt16(value: any): void;
    writeUint32(value: any): void;
    writeInt32(value: any): void;
    writeFloat(value: any): void;
    writeDouble(value: any): void;
    writeAsciiString(value: any): void;
    writeUTF8String(value: any): void;
    concat(stream: any): void;
}
export class DeflatedReadBufferStream extends ReadBufferStream {
    constructor(stream: any, options: any);
}
export class WriteBufferStream extends BufferStream {
}
declare class BufferStream {
    constructor(sizeOrBuffer: any, littleEndian: any);
    buffer: any;
    view: DataView<any>;
    offset: number;
    isLittleEndian: any;
    size: number;
    encoder: TextEncoder;
    setEndian(isLittle: any): void;
    writeUint8(value: any): any;
    writeUint8Repeat(value: any, count: any): any;
    writeInt8(value: any): any;
    writeUint16(value: any): any;
    writeTwoUint16s(value: any): any;
    writeInt16(value: any): any;
    writeUint32(value: any): any;
    writeInt32(value: any): any;
    writeFloat(value: any): any;
    writeDouble(value: any): any;
    writeUTF8String(value: any): any;
    writeAsciiString(value: any): any;
    readUint32(): number;
    readUint16(): number;
    readUint8(): number;
    peekUint8(offset: any): number;
    readUint8Array(length: any): Uint8Array<any>;
    readUint16Array(length: any): Uint16Array<ArrayBuffer>;
    readInt16(): number;
    readInt32(): number;
    readFloat(): number;
    readDouble(): number;
    readAsciiString(length: any): string;
    readVR(): string;
    readEncodedString(length: any): any;
    readHex(length: any): string;
    checkSize(step: any): void;
    concat(stream: any): any;
    increment(step: any): any;
    getBuffer(start: any, end: any): any;
    more(length: any): ReadBufferStream;
    reset(): this;
    end(): boolean;
    toEnd(): void;
}
export {};
