export default CircleRoi;
declare class CircleRoi {
    /** Gets the measurement data for cornerstone, given DICOM SR measurement data. */
    static getMeasurementData(MeasurementGroup: any): {
        toolType: string;
        active: boolean;
        cachedStats: {
            area: any;
            radius: number;
            perimeter: number;
        };
        handles: {
            end: {
                highlight: boolean;
                active: boolean;
                x: any;
                y: any;
            };
            initialRotation: number;
            start: {
                highlight: boolean;
                active: boolean;
                x: any;
                y: any;
            };
            textBox: {
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
        };
        invalidated: boolean;
        visible: boolean;
        sopInstanceUid: any;
        frameIndex: any;
        complete: boolean;
        finding: any;
        findingSites: any[];
    };
    /**
     * Gets the TID 300 representation of a circle, given the cornerstone representation.
     *
     * @param {Object} tool
     * @returns
     */
    static getTID300RepresentationArguments(tool: any): {
        area: any;
        areaUnit: any;
        perimeter: number;
        unit: any;
        radius: any;
        points: any[];
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}
declare namespace CircleRoi {
    export { CIRCLEROI as toolType };
    export { CIRCLEROI as utilityToolType };
    export { TID300Circle as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const CIRCLEROI: "CircleRoi";
import TID300Circle from "../../utilities/TID300/Circle";
