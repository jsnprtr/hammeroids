/**
* Application.
* Main application is run from here.
*
* Author: Jason Porter
*
**/

import {GameState} from'./game/gamestate';
import {View} from'./game/view';
import {App} from'./game/app';
import {Settings} from'./settings';
import {Ship} from'./game/entities/ship';
import {Sockets} from './game/sockets/sockets.js';
import {Camera} from './game/camera/camera.js';

document.addEventListener("DOMContentLoaded",function() {
  const settings = new Settings()
  const sockets = new Sockets(settings.baseSocketUrl);
  const gameState = new GameState(sockets);
  gameState.newPlayerShip();
  gameState.addListeners(window.addEventListener);
  const camera = new Camera(gameState);
  const view = new View(gameState, camera);
  let app = new App(60,100);
  app.run(gameState, view);
});
