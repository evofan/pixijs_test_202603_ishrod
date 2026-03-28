// reference URL
// https://pixijs.com/8.x/tutorials/getting-started#4

import { Application, Assets, Sprite } from "pixi.js";
import { VERSION } from "pixi.js";

import { Text } from "pixi.js";

// Create a PixiJS application.
const app = new Application();

// Asynchronous IIFE(即時実行関数式)
// Asynchronous IIFE
(async () => {
  await setup();
  await preload();
})();

async function setup() {
  /** -- INSERT CODE HERE -- */
}

async function preload() {
  /** -- INSERT CODE HERE -- */
}

// PixiJSのバージョンを表示
console.log(VERSION); // 8.17.1
