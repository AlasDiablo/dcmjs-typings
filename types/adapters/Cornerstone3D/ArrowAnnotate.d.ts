export default ArrowAnnotate;
declare class ArrowAnnotate {
    static getMeasurementData(MeasurementGroup: any, sopInstanceUIDToImageIdMap: any, imageToWorldCoords: any, metadata: any): {
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
    static getTID300RepresentationArguments(tool: any, worldToImageCoords: any): {
        points: {
            x: any;
            y: any;
        }[];
        trackingIdentifierTextValue: string;
        findingSites: any;
    };
}
declare namespace ArrowAnnotate {
    export { ARROW_ANNOTATE as toolType };
    export { ARROW_ANNOTATE as utilityToolType };
    export { TID300Point as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const ARROW_ANNOTATE: "ArrowAnnotate";
import TID300Point from "../../utilities/TID300/Point";
