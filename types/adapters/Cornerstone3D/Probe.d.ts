export default Probe;
declare class Probe {
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
        points: any;
        trackingIdentifierTextValue: string;
        findingSites: any;
        finding: any;
    };
}
declare namespace Probe {
    export { PROBE as toolType };
    export { PROBE as utilityToolType };
    export { TID300Point as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const PROBE: "Probe";
import TID300Point from "../../utilities/TID300/Point";
