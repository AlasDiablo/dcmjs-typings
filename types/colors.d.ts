export default Colors;

type Color = [number, number, number]

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Colors {
    static d65WhitePointXYZ(): Color;

    static dicomlab2RGB(dicomlab: Color): Color;

    static rgb2DICOMLAB(rgb: Color): Color;

    static dicomlab2LAB(dicomlab: Color): Color;

    static lab2DICOMLAB(lab: Color): Color;

    static rgb2LAB(rgb: Color): Color;

    static gammaCorrection(n: number): number;

    static invGammaCorrection(n: number): number;

    static rgb2XYZ(rgb: Color): Color;

    static xyz2LAB(xyz: Color): Color;

    static lab2RGB(lab: Color): Color;

    static lab2XYZ(lab: Color): Color;

    static xyz2RGB(xyz: Color): Color;

    static labf(n: number): number;

    static labfInv(n: number): number;
}
