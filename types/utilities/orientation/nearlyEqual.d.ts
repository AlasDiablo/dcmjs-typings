/**
 * nearlyEqual - Returns true if a and b are nearly equal
 * within a tolerance.
 *
 * Inspiration for this function logic source comes from:
 * https://floating-point-gui.de/errors/comparison/
 *
 * https://floating-point-gui.de is published under
 * the Creative Commons Attribution License (BY):
 * http://creativecommons.org/licenses/by/3.0/
 *
 * The actual implementation has been adjusted
 * as discussed here: https://github.com/dcmjs-org/dcmjs/pull/304
 *
 * More information on floating point comparison here:
 * http://randomascii.wordpress.com/2012/02/25/comparing-floating-point-numbers-2012-edition/
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance.
 * @return {Boolean} True if a and b are nearly equal.
 */
export default function nearlyEqual(a: number, b: number, epsilon: any): boolean;
