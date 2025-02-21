// // const path = require("path");
// // const HtmlWebpackPlugin = require("html-webpack-plugin");
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // const CopyPlugin = require('copy-webpack-plugin');

// // module.exports = {
// //   entry: "./src/index.js",
// //   output: {
// //     path: path.resolve(__dirname, "dist"),
// //     filename: "js/bundle.[contenthash].js",
// //     clean: true
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.jsx?$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: "babel-loader",
// //           options: {
// //             presets: ["@babel/preset-env", "@babel/preset-react"]
// //           }
// //         }
// //       },

// //       {
// //         test: /\.css$/,
// //         use: [MiniCssExtractPlugin.loader, "css-loader"]
// //       },
// //       {
// //         test: /\.(png|jpg|jpeg|gif|svg)$/i,
// //         type: "asset/resource"
// //       }
// //     ]
// //   },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: "./public/index.html",
// //       favicon: './public/favicon.ico'
// //       // filename: "index.html"
// //     }),
// //     new CopyPlugin({
// //       patterns: [
// //         { 
// //           from: 'public',
// //           to: '',
// //           globOptions: {
// //             ignore: ['**/favicon.ico']
// //           }
// //         }
// //       ]
// //     }),

// //     new MiniCssExtractPlugin({
// //       filename: "css/styles.[contenthash].css"
// //     })
// //   ],
// //   devServer: {
// //     static: {
// //       directory: path.join(__dirname, "dist")
// //     },
// //     compress: true,
// //     port: 9000,
// //     open: true, // This will open the browser automatically
// //     historyApiFallback: true // This is for SPA routing
// //   },
// //   resolve: {
// //     extensions: [".js", ".jsx"]
// //   }
// // };
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/bundle.[contenthash].js",
//     clean: true,
//     publicPath: '/'  // Add this for routing
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"]
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         type: "asset/resource"
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       favicon: './public/favicon.ico',
//       filename: "index.html",
//       inject: true
//     }),
//     new CopyPlugin({
//       patterns: [
//         { 
//           from: 'public',
//           to: '',
//           globOptions: {
//             ignore: ['**/index.html', '**/favicon.ico']  // Ignore both files
//           }
//         }
//       ]
//     }),
//     new MiniCssExtractPlugin({
//       filename: "css/styles.[contenthash].css"
//     })
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "dist")
//     },
//     compress: true,
//     port: 9000,
//     open: true,
//     historyApiFallback: true,
//     hot: true,  // Enable hot module replacement
//     client: {
//       overlay: true  // Show errors in browser
//     },
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//       "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
//     }
//   },
//   resolve: {
//     extensions: [".js", ".jsx"]
//   },
//   devtool: 'source-map'  // Add source maps for debugging
// };
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.[contenthash].js",
    clean: true,
    publicPath: "/" // Necessary for proper routing
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html",
      inject: "body", // Forces script to be injected
      scriptLoading: "blocking" // Ensures it loads correctly
      // inject: true
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: "public",
          to: "",
          globOptions: {
            ignore: ["**/index.html"] // This prevents index.html duplication
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.[contenthash].css"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true, // Allows deep linking for SPA
    hot: true, // Enables Hot Module Replacement
    client: {
      overlay: true // Displays errors in browser
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map" // Useful for debugging
};
