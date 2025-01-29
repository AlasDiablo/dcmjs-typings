export default PlanarFreehandROI;

declare class PlanarFreehandROI {
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
        area: number;
        perimeter: number;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}

declare namespace PlanarFreehandROI {
    export {PLANARFREEHANDROI as toolType};
    export {PLANARFREEHANDROI as utilityToolType};
    export {TID300Polyline as TID300Representation};

    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const PLANARFREEHANDROI: "PlanarFreehandROI";
import TID300Polyline from "../../utilities/TID300/Polyline";
