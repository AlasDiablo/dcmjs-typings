export class FindingSite extends CodeContentItem {
    ContentSequence: ContentSequence;
}
export class LongitudinalTemporalOffsetFromEvent extends NumContentItem {
    ContentSequence: ContentSequence;
}
export class ReferencedRealWorldValueMap extends CompositeContentItem {
}
export class ImageRegion extends ScoordContentItem {
    ContentSequence: ContentSequence;
}
export class ImageRegion3D extends Scoord3DContentItem {
}
export class ReferencedSegmentation extends ContentSequence {
    constructor(options: any);
}
export class ReferencedSegmentationFrame extends ContentSequence {
    constructor(options: any);
}
export class VolumeSurface extends Scoord3DContentItem {
    ContentSequence: ContentSequence;
}
export class SourceImageForRegion extends ImageContentItem {
}
export class SourceImageForSegmentation extends ImageContentItem {
}
export class SourceSeriesForSegmentation extends UIDRefContentItem {
}
import { CodeContentItem } from "./valueTypes";
import { ContentSequence } from "./valueTypes";
import { NumContentItem } from "./valueTypes";
import { CompositeContentItem } from "./valueTypes";
import { ScoordContentItem } from "./valueTypes";
import { Scoord3DContentItem } from "./valueTypes";
import { ImageContentItem } from "./valueTypes";
import { UIDRefContentItem } from "./valueTypes";
