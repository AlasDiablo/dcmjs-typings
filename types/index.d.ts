import {DICOMWEB} from "./dicomweb";
import adapters from "./adapters";

import sr from "./sr";
import utilities from "./utilities";
import log from "./log";

import {BitArray} from "./bitArray";
import {ReadBufferStream} from "./BufferStream";
import {DeflatedReadBufferStream} from "./BufferStream";
import {WriteBufferStream} from "./BufferStream";
import {DicomDict} from "./DicomDict";
import {DicomMessage} from "./DicomMessage";
import {DicomMetaDictionary} from "./DicomMetaDictionary";
import {Tag} from "./Tag";
import {ValueRepresentation} from "./ValueRepresentation";
import {Colors} from "./colors";
import {datasetToDict} from "./datasetToBlob";
import {datasetToBuffer} from "./datasetToBlob";
import {datasetToBlob} from "./datasetToBlob";
import {DerivedDataset} from "./derivations";
import {DerivedPixels} from "./derivations";
import {DerivedImage} from "./derivations";
import {Segmentation} from "./derivations";
import {StructuredReport} from "./derivations";
import {ParametricMap} from "./derivations";
import {Normalizer} from "./normalizers";
import {ImageNormalizer} from "./normalizers";
import {MRImageNormalizer} from "./normalizers";
import {EnhancedMRImageNormalizer} from "./normalizers";
import {EnhancedUSVolumeNormalizer} from "./normalizers";
import {CTImageNormalizer} from "./normalizers";
import {PETImageNormalizer} from "./normalizers";
import {SEGImageNormalizer} from "./normalizers";
import {DSRNormalizer} from "./normalizers";
import {cleanTags} from "./anonymizer";
import {getTagsNameToEmpty} from "./anonymizer";

export namespace data {
    export {BitArray};
    export {ReadBufferStream};
    export {DeflatedReadBufferStream};
    export {WriteBufferStream};
    export {DicomDict};
    export {DicomMessage};
    export {DicomMetaDictionary};
    export {Tag};
    export {ValueRepresentation};
    export {Colors};
    export {datasetToDict};
    export {datasetToBuffer};
    export {datasetToBlob};
}
export namespace derivations {
    export {DerivedDataset};
    export {DerivedPixels};
    export {DerivedImage};
    export {Segmentation};
    export {StructuredReport};
    export {ParametricMap};
}
export namespace normalizers {
    export {Normalizer};
    export {ImageNormalizer};
    export {MRImageNormalizer};
    export {EnhancedMRImageNormalizer};
    export {EnhancedUSVolumeNormalizer};
    export {CTImageNormalizer};
    export {PETImageNormalizer};
    export {SEGImageNormalizer};
    export {DSRNormalizer};
}
export namespace anonymizer {
    export {cleanTags};
    export {getTagsNameToEmpty};
}

namespace dcmjs {
    export {DICOMWEB};
    export {adapters};
    export {data};
    export {derivations};
    export {normalizers};
    export {sr};
    export {utilities};
    export {log};
    export {anonymizer};
}

export default dcmjs;


