/**
 * Performs a deep equality check between two objects. Used primarily during DICOM write operations
 * to determine whether a data element underlying value has changed since it was initially read.
 *
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {boolean} - Returns `true` if the structures and values of the objects are deeply equal, `false` otherwise.
 */
export function deepEqual(obj1: any, obj2: any): boolean;
