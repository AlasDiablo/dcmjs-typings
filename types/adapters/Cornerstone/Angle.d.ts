export default Angle;

declare class Angle {
    /**
     * Generate TID300 measurement data for a plane angle measurement - use a CobbAngle, but label it as Angle
     * @param  MeasurementGroup
     * @returns
     */
    static getMeasurementData(MeasurementGroup: any): {
        rAngle: any;
        toolType: string;
        handles: {
            start: {};
            middle: {};
            end: {};
            textBox: {
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
        };
        sopInstanceUid: any;
        frameIndex: any;
        complete: boolean;
        finding: any;
        findingSites: any[];
    };

    static getTID300RepresentationArguments(tool: any): {
        point1: any;
        point2: any;
        point3: any;
        point4: any;
        rAngle: any;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}

declare namespace Angle {
    export {ANGLE as toolType};
    export {ANGLE as utilityToolType};
    export {TID300CobbAngle as TID300Representation};

    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const ANGLE: "Angle";
import TID300CobbAngle from "../../utilities/TID300/CobbAngle";
