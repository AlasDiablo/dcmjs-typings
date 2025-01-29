declare class MeasurementReport {
    static generateReport(rois: any, metadataProvider: any, options: any): StructuredReport;

    static generateToolState(dataset: any): {};

    static registerTool(toolClass: any): void;
}

declare namespace MeasurementReport {
    let MEASUREMENT_BY_TOOLTYPE: {};
    let MICROSCOPY_TOOL_CLASSES_BY_UTILITY_TYPE: {};
    let MICROSCOPY_TOOL_CLASSES_BY_TOOL_TYPE: {};
}
export default MeasurementReport;
import {StructuredReport} from "../../derivations";
