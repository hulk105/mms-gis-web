/**
 * @typedef {Object} PointJSON
 * @property {number} id
 * @property {number} x
 * @property {number} y
 */

export class Point {

  /**
   * Creates a new instance of Point.
   *
   * @param {PointJSON} pointJSON
   */
  constructor(pointJSON) {
    this.id = pointJSON.id;
    this.x = pointJSON.x;
    this.y = pointJSON.y;
  }

}