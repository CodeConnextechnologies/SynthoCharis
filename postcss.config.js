module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          minifyFontValues: false,
          // Disable some other optimizations
          // Other options can be added here as needed
        },
      ],
    }),
  ],
};
