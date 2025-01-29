export default dicomJson;
declare namespace dicomJson {
    export { pnObjectToString };
    export { pnStringToObject as pnConvertToJsonObject };
    export { pnAddValueAccessors };
}
/**
 * Returns the dicom part10 equivalent string for a given json object.
 * @param {object | string} value
 * @returns {string} dicom part10 equivalent string
 */
declare function pnObjectToString(value: object | string): string;
/**
 * Converts a PN string to the dicom+json equivalent, or returns the
 * original object
 * @param {string | object} value Part10 style PersonName (PN) string (ie 'A^B==C\D') or object
 * @param {bool} multiple if false returns the first valid PersonName, otherwise returns all PersonNames
 * @returns {object} dicom+json representation of PersonName value, or the same object.
 */
declare function pnStringToObject(value: string | object, multiple?: bool): object;
/**
 * Overrides toJSON and toString to ensure JSON.stringify always returns
 * a valid dicom+json object, even when given a string such as "Doe^John".
 * @param {object} value value object which will be given the accessors. note
 *     for a string it must first be boxed: new String(value)
 * @returns {object} the same object
 */
declare function pnAddValueAccessors(value: object): object;
