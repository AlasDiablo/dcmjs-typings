export default Ellipse;
declare class Ellipse {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Ellipse {
    export let graphicType: string;
    export let toolType: string;
    export let utilityToolType: string;
    export { TID300Ellipse as TID300Representation };
}
import TID300Ellipse from "../../utilities/TID300/Ellipse";
