export class Normalizer {
    static consistentSOPClassUIDs(datasets: any): undefined;

    static normalizerForSOPClassUID(sopClassUID: any): any;

    static isMultiframeSOPClassUID(sopClassUID: any): boolean;

    static isMultiframeDataset(ds?: any): boolean;

    static normalizeToDataset(datasets: any): any;

    constructor(datasets: any);

    datasets: any;
    dataset: any;

    normalize(): string;
}

export class ImageNormalizer extends Normalizer {
    static vec3CrossProduct(a: any, b: any): number[];

    static vec3Subtract(a: any, b: any): number[];

    static vec3Dot(a: any, b: any): number;

    normalize(): void;

    convertToMultiframe(): void;

    derivation: DerivedImage;

    normalizeMultiframe(): void;
}

export class MRImageNormalizer extends ImageNormalizer {
}

export class EnhancedCTImageNormalizer extends ImageNormalizer {
}

export class EnhancedMRImageNormalizer extends ImageNormalizer {
}

export class EnhancedUSVolumeNormalizer extends ImageNormalizer {
}

export class NMImageNormalizer extends ImageNormalizer {
}

export class CTImageNormalizer extends ImageNormalizer {
}

export class PETImageNormalizer extends ImageNormalizer {
}

export class SEGImageNormalizer extends ImageNormalizer {
}

export class PMImageNormalizer extends ImageNormalizer {
}

export class DSRNormalizer extends Normalizer {
    normalize(): void;
}

export class OPImageNormalizer extends Normalizer {
    normalize(): void;
}

export class OCTImageNormalizer extends ImageNormalizer {
}

import {DerivedImage} from "./derivations/index.js";
