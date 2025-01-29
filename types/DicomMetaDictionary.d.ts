import dictionary, {DictionaryEntry} from "./dictionary";

/* Todo found the type of the 'unknown' place holder */

// Todo create a correct type of the dataset
type Dataset = Record<string, unknown>;

export class DicomMetaDictionary {
    static punctuateTag(rawTag: string): string;

    static unpunctuateTag(tag: string): string;

    static parseIntFromTag(tag: string | number): number;

    static tagAsIntegerFromName(name: string): number | undefined;

    static cleanDataset(dataset: Dataset): Dataset;

    static namifyDataset(dataset: Dataset): Dataset;

    /** converts from DICOM JSON Model dataset to a natural dataset
     * - sequences become lists
     * - single element lists are replaced by their first element,
     *     with single element lists remaining lists, but being a
     *     proxy for the child values, see addAccessors for examples
     * - object member names are dictionary, not group/element tag
     */
    static naturalizeDataset(dataset: Dataset): unknown;

    static denaturalizeValue(naturalValue: unknown | unknown[]): string[];

    static denaturalizeDataset(dataset: Dataset, nameMap?: Record<string, DictionaryEntry>): Dataset;

    static uid(): string;

    static date(): string;

    static time(): string;

    static dateTime(): string;

    static _generateNameMap(): void;

    static _generateCustomNameMap(dictionary: Record<string, DictionaryEntry>): Record<string, DictionaryEntry>;

    static _generateUIDMap(): void;

    constructor(customDictionary: Record<string, DictionaryEntry>);

    customDictionary: Record<string, DictionaryEntry>;
    customNameMap: Record<string, DictionaryEntry>;

    denaturalizeDataset(dataset: Dataset): Dataset;
}

export namespace DicomMetaDictionary {
    export const sopClassNamesByUID: {
        "1.2.840.10008.5.1.4.1.1.20": "NMImage";
        "1.2.840.10008.5.1.4.1.1.2": "CTImage";
        "1.2.840.10008.5.1.4.1.1.2.1": "EnhancedCTImage";
        "1.2.840.10008.5.1.4.1.1.2.2": "LegacyConvertedEnhancedCTImage";
        "1.2.840.10008.5.1.4.1.1.3.1": "USMultiframeImage";
        "1.2.840.10008.5.1.4.1.1.4": "MRImage";
        "1.2.840.10008.5.1.4.1.1.4.1": "EnhancedMRImage";
        "1.2.840.10008.5.1.4.1.1.4.2": "MRSpectroscopy";
        "1.2.840.10008.5.1.4.1.1.4.3": "EnhancedMRColorImage";
        "1.2.840.10008.5.1.4.1.1.4.4": "LegacyConvertedEnhancedMRImage";
        "1.2.840.10008.5.1.4.1.1.6.1": "USImage";
        "1.2.840.10008.5.1.4.1.1.6.2": "EnhancedUSVolume";
        "1.2.840.10008.5.1.4.1.1.7": "SecondaryCaptureImage";
        "1.2.840.10008.5.1.4.1.1.30": "ParametricMapStorage";
        "1.2.840.10008.5.1.4.1.1.66": "RawData";
        "1.2.840.10008.5.1.4.1.1.66.1": "SpatialRegistration";
        "1.2.840.10008.5.1.4.1.1.66.2": "SpatialFiducials";
        "1.2.840.10008.5.1.4.1.1.66.3": "DeformableSpatialRegistration";
        "1.2.840.10008.5.1.4.1.1.66.4": "Segmentation";
        "1.2.840.10008.5.1.4.1.1.67": "RealWorldValueMapping";
        "1.2.840.10008.5.1.4.1.1.88.11": "BasicTextSR";
        "1.2.840.10008.5.1.4.1.1.88.22": "EnhancedSR";
        "1.2.840.10008.5.1.4.1.1.88.33": "ComprehensiveSR";
        "1.2.840.10008.5.1.4.1.1.128": "PETImage";
        "1.2.840.10008.5.1.4.1.1.130": "EnhancedPETImage";
        "1.2.840.10008.5.1.4.1.1.128.1": "LegacyConvertedEnhancedPETImage";
        "1.2.840.10008.5.1.4.1.1.77.1.5.1": "OphthalmicPhotography8BitImage";
        "1.2.840.10008.5.1.4.1.1.77.1.5.4": "OphthalmicTomographyImage";
    };
    export {dictionary};
}
