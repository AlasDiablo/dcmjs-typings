export default EllipticalROI;
declare class EllipticalROI {
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
        area: any;
        points: {
            x: any;
            y: any;
        }[];
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}
declare namespace EllipticalROI {
    export { ELLIPTICALROI as toolType };
    export { ELLIPTICALROI as utilityToolType };
    export { TID300Ellipse as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const ELLIPTICALROI: "EllipticalROI";
import TID300Ellipse from "../../utilities/TID300/Ellipse";
