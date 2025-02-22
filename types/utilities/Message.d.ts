export default message;
export type MultipartEncodedData = {
    /**
     * The encoded Multipart Data
     */
    data: ArrayBuffer;
    /**
     * The boundary used to divide pieces of the encoded data
     */
    boundary: string;
};
declare namespace message {
    export {containsToken};
    export {findToken};
    export {identifyBoundary};
    export {uint8ArrayToString};
    export {stringToUint8Array};
    export {multipartEncode};
    export {multipartDecode};
    export {guid};
}

/**
 * Checks whether a given token is contained by a message at a given offset.
 * @param {Uint8Array} message message content
 * @param {Uint8Array} token substring that should be present
 * @param {Number} offset offset in message content from where search should start
 * @returns {Boolean} whether message contains token at offset
 */
declare function containsToken(message: Uint8Array, token: Uint8Array, offset?: number): boolean;

/**
 * Finds a given token in a message at a given offset.
 * @param {Uint8Array} message message content
 * @param {Uint8Array} token substring that should be found
 * @param {Number} offset message body offset from where search should start
 * @returns {Boolean} whether message has a part at given offset or not
 */
declare function findToken(message: Uint8Array, token: Uint8Array, offset: number, maxSearchLength: any): boolean;

/**
 * Identifies the boundary in a multipart/related message header.
 * @param {String} header message header
 * @returns {String} boundary
 */
declare function identifyBoundary(header: string): string;

/**
 * Converts a Uint8Array to a String.
 * @param {Uint8Array} array that should be converted
 * @param {Number} offset array offset in case only subset of array items should be extracted (default: 0)
 * @param {Number} limit maximum number of array items that should be extracted (defaults to length of array)
 * @returns {String}
 */
declare function uint8ArrayToString(arr: any, offset: number, limit: number): string;

/**
 * Converts a String to a Uint8Array.
 * @param {String} str string that should be converted
 * @returns {Uint8Array}
 */
declare function stringToUint8Array(str: string): Uint8Array;

/**
 * @typedef {Object} MultipartEncodedData
 * @property {ArrayBuffer} data The encoded Multipart Data
 * @property {String} boundary The boundary used to divide pieces of the encoded data
 */
/**
 * Encode one or more DICOM datasets into a single body so it can be
 * sent using the Multipart Content-Type.
 *
 * @param {ArrayBuffer[]} datasets Array containing each file to be encoded in the multipart body, passed as ArrayBuffers.
 * @param {String} [boundary] Optional string to define a boundary between each part of the multipart body. If this is not specified, a random GUID will be generated.
 * @return {MultipartEncodedData} The Multipart encoded data returned as an Object. This contains both the data itself, and the boundary string used to divide it.
 */
declare function multipartEncode(datasets: ArrayBuffer[], boundary?: string, contentType?: string): MultipartEncodedData;

/**
 * Decode a Multipart encoded ArrayBuffer and return the components as an Array.
 *
 * @param {ArrayBuffer} response Data encoded as a 'multipart/related' message
 * @returns {Array} The content
 */
declare function multipartDecode(response: ArrayBuffer): any[];

/**
 * Create a random GUID
 *
 * @return {string}
 */
declare function guid(): string;
