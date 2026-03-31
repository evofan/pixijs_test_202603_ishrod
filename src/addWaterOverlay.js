import { Texture, TilingSprite } from "pixi.js";

// 水のオーバーレイ
let overlay;

/**
 * 水のオーバーレイを追加すｒ
 * @param { Object } app
 */
export function addWaterOverlay(app) {
  // 水のテクスチャーオブジェクトを作成する
  const texture = Texture.from("overlay");

  // 水のテクスチャーでタイリングスプライトを作成し、サイズを指定する
  overlay = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  // タイリングスプライトとは、基本的に単一のテクスチャの無限に繰り返されるグリッドを
  // 変換およびレンダリングする機能を持つスプライトであり、
  // できれば、組み合わせたときに端がシームレスに接続されるタイル状のテクスチャが望ましいです。

  // オーバーレイをステージに追加する
  app.stage.addChild(overlay);
}

/**
 * オーバーレイをアニメーションさせる
 * @param { Object } app
 * @param { Number } time
 */
export function animateWaterOverlay(app, time) {
  // Tickerオブジェクトからデルタタイムを抽出する
  const delta = time.deltaTime;

  // オーバーレイをアニメーションする
  overlay.tilePosition.x -= delta;
  overlay.tilePosition.y -= delta;
}
