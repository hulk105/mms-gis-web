import {Point} from './point.js'

/**
 * @typedef {Object} GroupJSON
 * @property {number} id
 * @property {string} tag
 * @property {string} section
 * @property {Array.<Point>} points
 */

export class Group {

  /**
   * Creates a new instance of Group.
   *
   * @param {GroupJSON} groupJSON
   */
  constructor(groupJSON) {
    this.id = groupJSON.id;
    this.tag = groupJSON.tag;
    this.section = groupJSON.section;
    this.points = groupJSON.points ? groupJSON.points.map(point => new Point(point)) : [];
  }

}