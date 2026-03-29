import { Sprite } from "pixi.js";

export function addBackground(app) {
  console.log("addBackground()");

  const background = Sprite.from("background");

  // 中心点を中央にセット
  background.anchor.set(0.5);

  // 背景画像を拡大
  if (app.screen.width > app.screen.height) {
    background.width = app.screen.width * 1.2;
    background.scale.y = background.scale.x;
  } else {
    background.height = app.screen.height * 1.2;
    background.scale.x = background.scale.y;
  }

  // 画面中央に配置
  background.x = app.screen.width / 2;
  background.y = app.screen.height / 2;

  // 画面に追加
  app.stage.addChild(background);
}
