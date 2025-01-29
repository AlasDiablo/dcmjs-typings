export default Polyline;
declare class Polyline {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Polyline {
    export let graphicType: string;
    export let toolType: string;
    export let utilityToolType: string;
    export { TID300Polyline as TID300Representation };
}
import TID300Polyline from "../../utilities/TID300/Polyline";
