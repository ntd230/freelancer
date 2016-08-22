'use strict';
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ENV = process.env.NODE_ENV;
let plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks:1}),
];
if ('production' === ENV) {
    plugins = plugins.concat([
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production'),
            '__DEVTOOLS__': false
          }
        }),
        new UglifyJsPlugin({
            compress: { warnings: false}
        }),
    ]);
}

module.exports = {
	entry: {
           node: "./src/server.js",
        },
	output: {
	    filename: "[name].bundle.js",
	    path: __dirname + "/assets"
	},
        node: {
          fs: "empty",
        },
        resolve: {
            extensions: ['','.js','.jsx']
        },
        resolveLoader: {
            root: __dirname + '/node_modules'
        },
	module: {
	    loaders: [
                  { 
                    test: /(.js|.jsx)$/, 
                    //exclude: /node_modules/,
                    loader: "babel-loader", 
                    query:{
                        cacheDirectory:true
                    } 
                  }
	    ]
	},
	plugins: plugins
};
