const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const path = require("path"),
HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require('./package.json');
const pages = ["index", "pricing", "custom_logo_design","how_it_works", "explore", 
                "pricing_business_card_design", "business_card_design", "dashboard", "dashboard_contest", "dashboard_contest_normal",
                "dashboard_profile"];
//const pages =["dashboard_contest"];

module.exports = {
  entry: pages.reduce((config, page) => {
    vendor: Object.keys(package.dependencies),
    config[page] = `./src/js/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
    library: "[name]"
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: "style-loader", // inject CSS to page
        }, {
          loader: "css-loader", // translates CSS into CommonJS modules
        }, {
          loader: "postcss-loader", // Run post css actions
          options: {
            postcssOptions: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require("precss"),
                  require("autoprefixer")
                ];
              }
            }
          }
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          "css-loader",
        ],
      },
    ]
  },

  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/views/${page}.html`,
          filename: `./${page}.html`,
          chunks: ['vendor', page],
        }),  
    ),
    new CopyWebpackPlugin({
      patterns: [
        {from: "src/views/images", to: "images/"},
        {from: "src/svg", to: "svg/"}
      ],
    }),
    new ESLintPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
  ),
};