import * as webpack from 'webpack';
// import MinifyPlugin = webpack.optimize.UglifyJsPlugin
import * as MinifyPlugin from "babel-minify-webpack-plugin";
import {NewLoader} from "webpack";

interface Env {
    isTest: boolean
}

export default function (env?: Env, argv?): webpack.Configuration {
    // if (!env) env = {isTest: false};
    // const tsconfig = env.isTest ? "tsconfig.test.json" : "tsconfig.json";

    //https://github.com/webpack/webpack.js.org/blob/de7e5ffb29/content/guides/webpack-and-typescript.md#enabling-tree-shaking
    //for web, we only support es6 browsers
    const userRules: NewLoader[] = [{
        loader: 'awesome-typescript-loader',
        options: {
            configFileName: "./src/tsconfig.json"
        }
    }];
    // TODO set targets.browsers
    // https://github.com/babel/babel-preset-env#babel-preset-env----
    // TODO should we use https://github.com/s-panferov/awesome-typescript-loader#usebabel-boolean-defaultfalse
    // userRules.unshift({
    //     loader: 'babel-loader'
    // });

    return {
        entry: {main: "./src/index.ts"},
        output: {
            path: __dirname + "/dist",
            filename: "[name].bundle.js",
            chunkFilename: '[name].bundle.js'
        },
        // devtool: '#inline-source-map',
        devtool: '#source-map',
        module: {
            rules: [
                {   test: /.ts$/,
                    use: userRules
                }
            ]
        },
        plugins: [
            new MinifyPlugin()
        ],
        resolve: {
            extensions: ['.ts', '.js', '.json']
        }
    }
}
