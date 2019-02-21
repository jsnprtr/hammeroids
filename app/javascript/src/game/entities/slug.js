import {Physics} from '../physics/physics.js'
import {PathDrawer} from '../drawing/pathdrawer.js';

export class Slug {
  constructor(x, y, angle) {
    const SLUG_SPEED = 5,
      xMomentum = Physics.getCosOfDegrees(angle + 90),
      yMomentum = Physics.getCosOfDegrees(angle);
    this._physics = new Physics(1, 3, 1, x, y, angle, xMomentum * SLUG_SPEED, yMomentum * SLUG_SPEED);
    this._slugCoords = [[0,4],[0,-4]];
  }

  getDrawer = () => {
    const newCoords = [];
    for(let coord in this._slugCoords) {
      newCoords.push(this._physics.getTransform(this._slugCoords[coord][0], this._slugCoords[coord][1]));
    }
    return new PathDrawer('rgb(255,255,255)', 4, newCoords);
  }

  update = () => {
    this._physics.update();
  }
}