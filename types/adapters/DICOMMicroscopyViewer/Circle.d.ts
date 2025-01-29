export default Circle;

declare class Circle {
    static getMeasurementData(measurementContent: any): any;

    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}

declare namespace Circle {
    export let graphicType: string;
    export let toolType: string;
    export let utilityToolType: string;
    export {TID300Circle as TID300Representation};
}
import TID300Circle from "../../utilities/TID300/Circle";
