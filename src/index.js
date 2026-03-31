// reference URL
// https://pixijs.com/8.x/tutorials/fish-pond#1

import { Application, Assets, Sprite } from "pixi.js";
import { VERSION } from "pixi.js";

import { Text } from "pixi.js";

import { addBackground } from "./addBackground";
import { addFishes, animateFishes } from "./addFish";
import { addWaterOverlay, animateWaterOverlay } from "./addWaterOverlay";

// Pixiアプリケーションを作成する
const app = new Application();

// 魚のスプライト（アニメーション）用の配列を定義
const fishes = [];

// Pixiをセットアップする
async function setup() {
  console.log("setup()");

  // 初期化する（初期設定を定義）
  await app.init({ background: "#1099bb", resizeTo: window });

  // canvasに追加
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

// Asynchronous IIFE（非同期の即時実行関数）
(async () => {
  await setup();
  await preload();

  // 背景画像表示する (アプリの参照を渡す)
  addBackground(app);

  // 魚を追加する（魚の配列を渡す＝アニメーションでも使うので呼び出し外で定義）
  addFishes(app, fishes);

  // 水のオーバーレイを追加する（波紋のようなテクスチャーが追加される）
  addWaterOverlay(app);

  // アニメーションのコールバックを呼び出す
  app.ticker.add((time) => {
    animateFishes(app, fishes, time);
    animateWaterOverlay(app, time);
  });
})();
