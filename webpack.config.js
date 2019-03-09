const path = require('path')
const slsw = require('serverless-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const nodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const plugins = [new ForkTsCheckerWebpackPlugin()]
if (process.env.BUILD) {
  plugins.push(new BundleAnalyzerPlugin())
}

const entries = {}

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]])
)

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins,
  externals: [nodeExternals()]
}
