const path = require("path");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: {
            index: './src/index.js'
        },
        output: {
            filename: 'asset.js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './src',
            host: '0.0.0.0',
            historyApiFallback: true
        },
        module:{
            rules:[
                {
                    test: /\.js$/,
                    use: {
                      loader: 'babel-loader'
                    },
                    exclude: /node_modules/
                  },
                  {
                    test: /\.css$/,
                    use: [
                      'css-loader'
                    ]
                  },
                  {
                    test: /\.scss$/,
                    use: [
                      'css-loader',
                      'sass-loader'
                    ]
                  },
                  {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                      (info) => {
                        const m = info.resource.match(/\/src\/components\/(\w+)/);
                        return {
                          loader: 'file-loader',
                          options: {
                            name: m ? `components/${m[1]}/[name].[ext]` : `images/[name].[ext]`
                          }
                        }
                      }
                    ]
                  },
                  {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: 'fonts/[name].[ext]'
                        }
                      }
                    ]
                  }
            ]
        }
    }
}