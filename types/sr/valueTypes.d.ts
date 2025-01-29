export class CodeContentItem extends ContentItem {
    ConceptCodeSequence: any[];
}

export class ContainerContentItem extends ContentItem {
    ContinuityOfContent: string;
    ContentTemplateSequence: {
        MappingResource: string;
        TemplateIdentifier: any;
    }[];
}

export class ContentSequence extends Array<any> {
    constructor(...args: any[]);
}

export class CompositeContentItem extends ContentItem {
    ReferenceSOPSequence: {
        ReferencedSOPClassUID: any;
        ReferencedSOPInstanceUID: any;
    }[];
}

export class DateContentItem extends ContentItem {
    Date: string;
}

export class DateTimeContentItem extends ContentItem {
    DateTime: string;
}

export namespace GraphicTypes {
    let CIRCLE: string;
    let ELLIPSE: string;
    let ELLIPSOID: string;
    let MULTIPOINT: string;
    let POINT: string;
    let POLYLINE: string;
}
export namespace GraphicTypes3D {
    let ELLIPSE_1: string;
    export {ELLIPSE_1 as ELLIPSE};
    let ELLIPSOID_1: string;
    export {ELLIPSOID_1 as ELLIPSOID};
    let MULTIPOINT_1: string;
    export {MULTIPOINT_1 as MULTIPOINT};
    let POINT_1: string;
    export {POINT_1 as POINT};
    let POLYLINE_1: string;
    export {POLYLINE_1 as POLYLINE};
    export let POLYGON: string;
}

export class ImageContentItem extends ContentItem {
    ReferencedSOPSequence: {
        ReferencedSOPClassUID: any;
        ReferencedSOPInstanceUID: any;
        ReferencedFrameNumber: any;
        ReferencedSegmentNumber: any;
    }[];
}

export class NumContentItem extends ContentItem {
    MeasuredValueSequence: {
        NumericValue: any;
        MeasurementUnitsCodeSequence: any[];
    }[];
    NumericValueQualifierCodeSequence: any[];
}

export class PNameContentItem extends ContentItem {
    PersonName: any;
}

export namespace PixelOriginInterpretations {
    let FRAME: string;
    let VOLUME: string;
}
export namespace RelationshipTypes {
    let CONTAINS: string;
    let HAS_ACQ_CONTENT: string;
    let HAS_CONCEPT_MOD: string;
    let HAS_OBS_CONTEXT: string;
    let HAS_PROPERTIES: string;
    let INFERRED_FROM: string;
    let SELECTED_FROM: string;
}

export class ScoordContentItem extends ContentItem {
    GraphicData: any;
    FiducialUID: any;
}

export class Scoord3DContentItem extends ContentItem {
    GraphicType: any;
    GraphicData: any;
    ReferencedFrameOfReferenceUID: any;
    FiducialUID: any;
}

export class TcoordContentItem extends ContentItem {
    ReferencedSamplePositions: any;
    ReferencedTimeOffsets: any;
    ReferencedDateTime: any;
}

export namespace TemporalRangeTypes {
    export let BEGIN: string;
    export let END: string;
    let MULTIPOINT_2: string;
    export {MULTIPOINT_2 as MULTIPOINT};
    export let MULTISEGMENT: string;
    let POINT_2: string;
    export {POINT_2 as POINT};
    export let SEGMENT: string;
}

export class TextContentItem extends ContentItem {
    TextValue: any;
}

export class TimeContentItem extends ContentItem {
    Time: string;
}

export class UIDRefContentItem extends ContentItem {
    UID: any;
}

export namespace ValueTypes {
    let CODE: string;
    let COMPOSITE: string;
    let CONTAINER: string;
    let DATE: string;
    let DATETIME: string;
    let IMAGE: string;
    let NUM: string;
    let PNAME: string;
    let SCOORD: string;
    let SCOORD3D: string;
    let TCOORD: string;
    let TEXT: string;
    let TIME: string;
    let UIDREF: string;
    let WAVEFORM: string;
}

declare class ContentItem {
    constructor(options: any);

    ConceptNameCodeSequence: any[];
    ValueType: any;
    RelationshipType: any;
}

export {};
