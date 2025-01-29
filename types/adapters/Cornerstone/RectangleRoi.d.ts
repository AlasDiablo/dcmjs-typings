export default RectangleRoi;

declare class RectangleRoi {
    static getMeasurementData(MeasurementGroup: any): {
        toolType: string;
        handles: {
            start: {};
            end: {};
            textBox: {
                active: boolean;
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
            initialRotation: number;
        };
        cachedStats: {
            area: any;
        };
        color: any;
        invalidated: boolean;
        sopInstanceUid: any;
        frameIndex: any;
        complete: boolean;
        finding: any;
        findingSites: any[];
    };

    static getTID300RepresentationArguments(tool: any): {
        points: any[];
        area: any;
        perimeter: any;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}

declare namespace RectangleRoi {
    export let toolType: string;
    export let utilityToolType: string;
    export {TID300Polyline as TID300Representation};

    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
import TID300Polyline from "../../utilities/TID300/Polyline";
