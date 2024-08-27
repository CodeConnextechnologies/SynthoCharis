// // postcss.config.cjs
// const postcssPresetEnv = require("postcss-preset-env");
// const cssnano = require("cssnano");

// module.exports = {
//   // plugins: [
//   //   postcssPresetEnv(),
//   //   cssnano({
//   //     preset: [
//   //       "default",
//   //       {
//   //         discardComments: { removeAll: true },
//   //         minifyFontValues: false,
//   //       },
//   //     ],
//   //   }),
//   // ],
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwindcss(), autoprefixer()],
};
