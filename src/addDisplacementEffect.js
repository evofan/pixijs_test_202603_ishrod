import {
  DisplacementFilter,
  Sprite,
  TexturePool,
  BlurFilter,
  TextureSource,
} from "pixi.js";

export function addDisplacementEffect(app) {
  // フィルター効果をかけるスプライトを指定
  const sprite = Sprite.from("displacement");
  // sprite.texture.baseTexture.wrapMode = 'repeat';
  // ※baseTextureはPixi8で廃止

  // sprite.texture = "repeat";

  // TexturePool.textureOptions.wrapMode("repeat");

  // sprite.texture.wrapMode = "repeat";

  // sprite.texture.TextureSource = "repeat";

  const filter = new DisplacementFilter({
    sprite: sprite,
    //blendMode: "luminosity",
    //blendRequired: true,
    scale: 20,
  });

  const filter2 = new BlurFilter({
    strength: 8, // Overall blur strength
    quality: 4, // Blur quality (higher = better but slower)
    kernelSize: 5, // Size of blur kernel matrix
  });

  //sprite.filters = filter;

  // ぼかしフィルターを作成し適用
  // const blurFilter = new BlurFilter();
  // sprite.filters = [blurFilter];

  //filter.scale.x = 50;
  //filter.scale.y = 50;
  app.stage.filter = [filter];
}
