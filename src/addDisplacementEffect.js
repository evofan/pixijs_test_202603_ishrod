import {
  DisplacementFilter,
  Sprite,
  TexturePool,
  BlurFilter,
  TextureSource,
} from "pixi.js";

export function addDisplacementEffect(app) {
  console.log("addDisplacementEffect()");
  // フィルター効果をかけるスプライトを指定
  const sprite = Sprite.from("displacement");
  // sprite.texture.baseTexture.wrapMode = 'repeat';
  // ※baseTextureはPixi8で廃止

  // sprite.texture = "repeat";

  // TexturePool.textureOptions.wrapMode("repeat");

  // sprite.texture.wrapMode = "repeat";

  // sprite.texture.TextureSource = "repeat";

  sprite.texture.source.wrapMode = "repeat";
  // sprite.source.wrapMode = "repeat";

  const textureSource = sprite.texture.source;

  textureSource.wrapMode = "repeat";


  // sprite.filters= new DisplacementFilter({
  const filter = new DisplacementFilter({
    sprite: sprite,
    //blendMode: "luminosity",
    //blendRequired: true,
    scale: 50,
  });

  // New default behavior (optimized)
  const blur = new BlurFilter({ strength: 20, quality: 4 });

  // sprite.filters = [new DisplacementFilter({ strength: 8 })];

  //filter.texture.source.wrapMode = "repeat";

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
  app.stage.addChild(sprite);
  app.stage.filter = [filter2];
}
