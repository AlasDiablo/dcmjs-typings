export default BitArray;
export namespace BitArray {
    export {getBytesForBinaryFrame};
    export {pack};
    export {unpack};
}

declare function getBytesForBinaryFrame(numPixels: number): number;

declare function pack(pixelData: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;

declare function unpack(bitPixelArray: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
