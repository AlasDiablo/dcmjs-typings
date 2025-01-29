export default utilities;
declare namespace utilities {
    export { TID1500 };
    export { TID300 };
    export { message };
    export { addAccessors };
    export { orientation };
    export { compression };
    export { dicomJson };
}
import TID1500 from "./TID1500";
import TID300 from "./TID300";
import message from "./Message";
import addAccessors from "./addAccessors";
import * as orientation from "./orientation";
import * as compression from "./compression/rleSingleSamplePerPixel";
import dicomJson from "./dicomJson";
