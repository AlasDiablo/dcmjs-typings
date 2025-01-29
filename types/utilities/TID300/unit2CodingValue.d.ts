export default unit2CodingValue;

/** Converts the given unit into the
 * specified coding values.
 * Has .measurementMap on the function specifying global units for measurements.
 */
declare function unit2CodingValue(units: any): any;

declare namespace unit2CodingValue {
    export {measurementMap};
}
declare const measurementMap: {
    px: {
        CodeValue: string;
        CodingSchemeDesignator: string;
        CodingSchemeVersion: string;
        CodeMeaning: string;
    };
    mm: {
        CodeValue: string;
        CodingSchemeDesignator: string;
        CodingSchemeVersion: string;
        CodeMeaning: string;
    };
    mm2: {
        CodeValue: string;
        CodingSchemeDesignator: string;
        CodingSchemeVersion: string;
        CodeMeaning: string;
    };
    "mm\u00B2": {
        CodeValue: string;
        CodingSchemeDesignator: string;
        CodingSchemeVersion: string;
        CodeMeaning: string;
    };
    "px\u00B2": {
        CodeValue: string;
        CodingSchemeDesignator: string;
        CodingSchemeVersion: string;
        CodeMeaning: string;
    };
};
