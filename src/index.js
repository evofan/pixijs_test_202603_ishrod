// reference URL
// https://pixijs.com/8.x/tutorials/fish-pond#1

import { Application, Assets, Sprite } from "pixi.js";
import { VERSION } from "pixi.js";

import { Text } from "pixi.js";

import { addBackground } from "./addBackground";

// Pixiアプリケーションを作成する
const app = new Application();

// 非同期即時実行巻数
(async () => {
  await setup();
  await preload();
})();

// Pixiをセットアップする
async function setup() {
  console.log("setup()");

  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);
}

/**
 * 画像をプリロードする
 */
async function preload() {
  console.log("preload()");

  // エイリアスを使うのは後で参照し易くなるため
  const assets = [
    { alias: "background", src: "./assets/images/pond_background.jpg" },
    {
      alias: "fish1",
      src: "./assets/images/fish1.png",
    },
    {
      alias: "fish2",
      src: "./assets/images/fish2.png",
    },
    {
      alias: "fish3",
      src: "./assets/images/fish3.png",
    },
    {
      alias: "fish4",
      src: "./assets/images/fish4.png",
    },
    {
      alias: "fish5",
      src: "./assets/images/fish5.png",
    },
    {
      alias: "overlay",
      src: "./assets/images/wave_overlay.png",
    },
    {
      alias: "displacement",
      src: "./assets/images/displacement_map.png",
    },
  ];
  await Assets.load(assets);
}

// PixiJSのバージョンを表示
console.log(VERSION); // 8.17.1

// Asynchronous IIFE
(async () => {
  await setup();
  await preload();

  // アプリの参照を渡す
  addBackground(app);
})();
