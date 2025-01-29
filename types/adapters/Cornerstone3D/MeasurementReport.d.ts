declare class MeasurementReport {
    static getCornerstoneLabelFromDefaultState(defaultState: any): any;

    static generateDatasetMeta(): {
        FileMetaInformationVersion: {
            Value: ArrayBuffer[];
            vr: string;
        };
        TransferSyntaxUID: {
            Value: string[];
            vr: string;
        };
        ImplementationClassUID: {
            Value: string[];
            vr: string;
        };
        ImplementationVersionName: {
            Value: string[];
            vr: string;
        };
    };

    static generateDerivationSourceDataset(StudyInstanceUID: any, SeriesInstanceUID: any): {
        StudyInstanceUID: any;
        SeriesInstanceUID: any;
        _meta: {
            FileMetaInformationVersion: {
                Value: ArrayBuffer[];
                vr: string;
            };
            TransferSyntaxUID: {
                Value: string[];
                vr: string;
            };
            ImplementationClassUID: {
                Value: string[];
                vr: string;
            };
            ImplementationVersionName: {
                Value: string[];
                vr: string;
            };
        };
        _vrMap: {
            PixelData: string;
        };
    };

    static getSetupMeasurementData(MeasurementGroup: any, sopInstanceUIDToImageIdMap: any, metadata: any, toolType: any): {
        defaultState: {
            sopInstanceUid: any;
            annotation: {
                annotationUID: string;
                metadata: {
                    toolName: any;
                    referencedImageId: any;
                    FrameOfReferenceUID: any;
                    label: string;
                };
            };
            finding: any;
            findingSites: any[];
        };
        NUMGroup: any;
        SCOORDGroup: any;
        ReferencedSOPSequence: any;
        ReferencedSOPInstanceUID: any;
        ReferencedFrameNumber: any;
    };

    static generateReport(toolState: any, metadataProvider: any, worldToImageCoords: any, options: any): StructuredReport;

    /**
     * Generate Cornerstone tool state from dataset
     * @param {object} dataset dataset
     * @param {object} hooks
     * @param {function} hooks.getToolClass Function to map dataset to a tool class
     * @returns
     */
    static generateToolState(dataset: object, sopInstanceUIDToImageIdMap: any, imageToWorldCoords: any, metadata: any, hooks?: {
        getToolClass: Function;
    }): {};

    static registerTool(toolClass: any): void;
}

declare namespace MeasurementReport {
    let MEASUREMENT_BY_TOOLTYPE: {};
    let CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE: {};
    let CORNERSTONE_TOOL_CLASSES_BY_TOOL_TYPE: {};
}
export default MeasurementReport;
import {StructuredReport} from "../../derivations";
