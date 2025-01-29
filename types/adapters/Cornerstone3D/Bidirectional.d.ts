export default Bidirectional;
declare class Bidirectional {
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
        longAxis: {
            point1: {
                x: any;
                y: any;
            };
            point2: {
                x: any;
                y: any;
            };
        };
        shortAxis: {
            point1: {
                x: any;
                y: any;
            };
            point2: {
                x: any;
                y: any;
            };
        };
        longAxisLength: any;
        shortAxisLength: any;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}
declare namespace Bidirectional {
    export { BIDIRECTIONAL as toolType };
    export { BIDIRECTIONAL as utilityToolType };
    export { TID300Bidirectional as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const BIDIRECTIONAL: "Bidirectional";
import TID300Bidirectional from "../../utilities/TID300/Bidirectional";
