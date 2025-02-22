export class AlgorithmIdentification extends Template {
    constructor(options: any);
}

export class DeviceObserverIdentifyingAttributes extends Template {
    constructor(options: any);
}

export class ImageLibrary extends Template {
    constructor();
}

export class LanguageOfContentItemAndDescendants extends Template {
    constructor(options: any);
}

export class Measurement extends Template {
    constructor(options: any);
}

export class MeasurementAndQualitativeEvaluationGroup extends _MeasurementsAndQualitatitiveEvaluations {
}

export class MeasurementReport extends Template {
    constructor(options: any);
}

export class MeasurementsDerivedFromMultipleROIMeasurements extends Template {
    constructor(options: any);
}

export class ObservationContext extends Template {
    constructor(options: any);
}

export class ObserverContext extends Template {
    constructor(options: any);
}

export class PersonObserverIdentifyingAttributes extends Template {
    constructor(options: any);
}

export class PlanarROIMeasurementsAndQualitativeEvaluations extends _ROIMeasurementsAndQualitativeEvaluations {
}

export class ROIMeasurements extends Template {
    constructor(options: any);
}

export class SubjectContext extends Template {
    constructor(options: any);
}

export class SubjectContextDevice extends Template {
    constructor(options: any);
}

export class SubjectContextFetus extends Template {
    constructor(options: any);
}

export class SubjectContextSpecimen extends Template {
    constructor(options: any);
}

export class TimePointContext extends Template {
    constructor(options: any);
}

export class TrackingIdentifier extends Template {
    constructor(options: any);
}

export class VolumetricROIMeasurementsAndQualitativeEvaluations extends _ROIMeasurementsAndQualitativeEvaluations {
}

declare class Template extends ContentSequence {
}

declare class _MeasurementsAndQualitatitiveEvaluations extends Template {
    constructor(options: any);
}

declare class _ROIMeasurementsAndQualitativeEvaluations extends _MeasurementsAndQualitatitiveEvaluations {
    0: any;
}

import {ContentSequence} from "./valueTypes";

export {};
