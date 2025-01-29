export default Polygon;
declare class Polygon {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Polygon {
    export let graphicType: string;
    export let toolType: string;
    export let utilityToolType: string;
    export { TID300Polygon as TID300Representation };
}
import TID300Polygon from "../../utilities/TID300/Polygon";
