import {Physics} from '../physics/physics.js'
import {PathDrawer} from '../drawing/pathdrawer.js';

export class Ship {
  constructor(x, y) {
    const friction = 0.98,
      speed = 0.1,
      turnRate = 0.2;
    this._coords = [
      [0, -10],
      [7, 8],
      [0, 2],
      [-7, 8]
    ];
    this._strokeStyle = 'rgb(255,255,255)'
    this._lineWidth = 2; 
    this._turning;
    this._accelerating = false;
    this._physics = new Physics(friction, turnRate, speed, x, y);
  }

  getDrawer = () => {
    const newCoords = [];
    for(let coord in this._coords) {
      newCoords.push(this._physics.getTransform(this._coords[coord][0], this._coords[coord][1]));
    }
    return new PathDrawer(this._strokeStyle, this._lineWidth, newCoords);
  }

  getState = () => {
    return this._physics.getState();
  }

  setAccelerating = (accelerating) => {
    this._accelerating = accelerating;
  }

  setTurning = (turning) => {
    this._turning = turning;
  }

  update = () => {
    if(this._accelerating) {
      this._physics.accel();
    }
    if(this._turning) {
      this._physics.turn(this._turning);
    }
    this._physics.update();
  }
}