export default Length;

declare class Length {
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
        point1: {
            x: any;
            y: any;
        };
        point2: {
            x: any;
            y: any;
        };
        distance: any;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}

declare namespace Length {
    export {LENGTH as toolType};
    export {LENGTH as utilityToolType};
    export {TID300Length as TID300Representation};

    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const LENGTH: "Length";
import TID300Length from "../../utilities/TID300/Length";
