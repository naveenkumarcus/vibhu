const CracoLessPlugin = require("craco-less");

module.exports = {
  // babel: {
  //   presets: ['es2015', 'react'],
  //   plugins: [],
  //   // loaderOptions: {
  //   //   /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
  //   // },
  //   // loaderOptions: (babelLoaderOptions, { env, paths }) => {
  //   //   return babelLoaderOptions;
  //   // },
  // },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color":"#f39237",
              "@switch-color": "#13c2c2"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
