import { Container, Sprite } from "pixi.js";

/**
 * 魚を追加する
 * @param { Object } app アプリの参照
 * @param { Array } fishes 魚のスプライト配列
 */
export function addFishes(app, fishes) {
  // 新規コンテナ作成
  const fishContainer = new Container();
  app.stage.addChild(fishContainer);

  // 魚の数
  const fishCount = 20;
  // 配列に使用するエイリアス名を格納
  const fishAssets = ["fish1", "fish2", "fish3", "fish4", "fish5"];

  // 1匹ずつ定義するのは大変なのでまとめて定義する（※考え方）
  for (let i = 0; i < fishCount; i++) {
    const fishAsset = fishAssets[i % fishAssets.length]; // 配列内の数で使用する魚のスプライトアセットを折り返し
    const fish = Sprite.from(fishAsset); // 魚のスプライト作成

    fish.anchor.set(0.5); // 中心点をセット

    fish.direction = Math.random() * Math.PI * 2; // 方向を設定
    fish.speed = 1 + Math.random(); // 速度を設定
    fish.turnSpeed = Math.random() - 0.8; // 跳ね返る速度を設定

    fish.x = Math.random() * app.screen.width; // x座標を設定
    fish.y = Math.random() * app.screen.height; // y座標を設定
    fish.scale.set(0.5 + Math.random() * 0.2); // 大きさを設定

    fishContainer.addChild(fish); // コンテナにスプライトを追加（※appに追加ではない）
    fishes.push(fish); // 作成したスプライトを追加
  }
}

/**
 * 魚をアニメーションする
 * @param { Object } app アプリの参照
 * @param { Array } fishes 作成した魚を入れた配列
 * @param { Number } time tickerのタイム
 */
export function animateFishes(app, fishes, time) {
  const delta = time.deltaTime; // 前回の呼び出しからの経過時間

  // 魚が画面に出る途中で消えると不自然なので、実際の画面より大きい境界線を作成する（※考え方）
  const stagePadding = 100;
  const boundWidth = app.screen.width + stagePadding * 2;
  const boundHeight = app.screen.height + stagePadding * 2;

  // Arrayに繰り返しで魚の方向、速度、向きを設定
  fishes.forEach((fish) => {
    fish.direction += fish.turnSpeed * 0.01 * delta;
    fish.x += Math.sin(fish.direction) * fish.speed * delta;
    fish.y += Math.cos(fish.direction) * fish.speed * delta;
    fish.rotation = -fish.direction - Math.PI / 2;

    // 境界線をはみ出した時の処理
    if (fish.x < -stagePadding) {
      fish.x += boundWidth;
    }
    if (fish.x > app.screen.width + stagePadding) {
      fish.x -= boundWidth;
    }
    if (fish.y < -stagePadding) {
      fish.y += boundHeight;
    }
    if (fish.y > app.screen.height + stagePadding) {
      fish.y -= boundHeight;
    }
  });
}
