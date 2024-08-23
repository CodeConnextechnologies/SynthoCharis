// postcss.config.cjs
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    postcssPresetEnv(),
    cssnano({
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          minifyFontValues: false,
        },
      ],
    }),
  ],
};
