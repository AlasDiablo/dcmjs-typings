export default Point;
declare class Point {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any[];
        lengths: number;
    };
}
declare namespace Point {
    export let graphicType: string;
    export let toolType: string;
    export let utilityToolType: string;
    export { TID300Point as TID300Representation };
}
import TID300Point from "../../utilities/TID300/Point";
