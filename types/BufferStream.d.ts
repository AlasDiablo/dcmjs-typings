
interface ReadBufferStreamOptions {
    start: null | number;
    stop: null | number;
    noCopy: boolean;
}

export class ReadBufferStream extends BufferStream {
    constructor(buffer: ArrayBuffer, littleEndian: boolean, options?: ReadBufferStreamOptions);

    offset: number;
    size: number;
    noCopy: boolean;
    startOffset: number;
    endOffset: number;
    decoder: TextDecoder;

    setDecoder(decoder: TextDecoder): void;

    reset(): this;

    writeUint8(value: never): never;

    writeUint8Repeat(value: never, count: never): never;

    writeInt8(value: never): never;

    writeUint16(value: never): never;

    writeTwoUint16s(value: never): never;

    writeInt16(value: never): never;

    writeUint32(value: never): never;

    writeInt32(value: never): never;

    writeFloat(value: never): never;

    writeDouble(value: never): never;

    writeAsciiString(value: never): never;

    writeUTF8String(value: never): never;

    concat(stream: never): never;
}

export class DeflatedReadBufferStream extends ReadBufferStream {
    constructor(stream: ReadBufferStream, options: ReadBufferStreamOptions);
}

export class WriteBufferStream extends BufferStream {
}

declare class BufferStream {
    constructor(sizeOrBuffer: number | ArrayBuffer, littleEndian?: boolean);

    buffer: ArrayBuffer;
    view: DataView<ArrayBuffer>;
    offset: number;
    isLittleEndian: boolean;
    size: number;
    encoder: TextEncoder;

    setEndian(isLittle: boolean): void;

    writeUint8(value: number): number;

    writeUint8Repeat(value: number, count: number): number;

    writeInt8(value: number): number;

    writeUint16(value: number): number;

    writeTwoUint16s(value: number): number;

    writeInt16(value: number): number;

    writeUint32(value: number): number;

    writeInt32(value: number): number;

    writeFloat(value: number): number;

    writeDouble(value: number): number;

    writeUTF8String(value: string): number;

    writeAsciiString(value: string): number;

    readUint32(): number;

    readUint16(): number;

    readUint8(): number;

    peekUint8(offset: number): number;

    readUint8Array(length: number): Uint8Array<ArrayBuffer>;

    readUint16Array(length: number): Uint16Array<ArrayBuffer>;

    readInt16(): number;

    readInt32(): number;

    readFloat(): number;

    readDouble(): number;

    readAsciiString(length: number): string;

    readVR(): string;

    readEncodedString(length: number): string;

    readHex(length: number): string;

    checkSize(step: number): void;

    concat(stream: BufferStream): number;

    increment(step: number): number;

    getBuffer(start: number, end: number): ArrayBuffer;

    more(length: number): ReadBufferStream;

    reset(): this;

    end(): boolean;

    toEnd(): void;
}

export {};
