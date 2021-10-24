const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const project = require('../project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'none'
const __PROD__ = project.env === 'production'

const config = {
  mode: project.env,
  entry: {
    normalize: [
      inProjectSrc('normalize'),
    ],
    main: [
      inProjectSrc(project.main),
    ],
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath,
  },
  resolve: {
    modules: [
      inProject(project.srcDir),
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  externals: project.externals,
  module: {
    rules: [],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    moduleIds: 'named'
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign({
      'process.env.NODE_ENV': JSON.stringify(project.env),
      __DEV__,
      __TEST__,
      __PROD__,
    }, project.globals)),
    new webpack.EnvironmentPlugin(project.globals),
  ],
}

// TypeScript
// ------------------------------------
config.module.rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
  ]
})

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              chrome: '58',
              ie: '11'
            }
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            helpers: true,
            corejs: false, // we polyfill needed features in src/normalize.js
            regenerator: true,
          },
        ],
        [
          '@babel/plugin-proposal-object-rest-spread',
          {
            useBuiltIns: true // we polyfill Object.assign in src/normalize.js
          },
        ],
      ],
    }
  }],
})

// Styles
// ------------------------------------
const extractStyles = new MiniCssExtractPlugin({
  filename: 'styles/[name].[contenthash].css',
})

config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: project.sourcemaps,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: project.sourcemaps,
        sassOptions: {
          includePaths: [
            inProjectSrc('styles'),
          ],
        },
      },
    },
  ],
})
config.plugins.push(extractStyles)

// Images
// ------------------------------------
config.module.rules.push({
  test : /\.(png|jpg|gif)$/,
  dependency: { not: ['url'] },
  use : [
    {
      loader: 'url-loader',
      options : {
        limit : 8192,
      },
    }
  ],
  type: 'javascript/auto'
})

// SVG
// ------------------------------------
config.module.rules.push({
  test: /\.svg/,
  type: 'asset/inline'
})

// Fonts
// ------------------------------------
;[
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml'],
].forEach((font) => {
  const extension = font[0]
  const mimetype = font[1]

  config.module.rules.push({
    test    : new RegExp(`\\.${extension}$`),
    dependency: { not: ['url'] },
    use  : [
      {
        loader: 'url-loader',
        options : {
          name  : 'fonts/[name].[ext]',
          limit : 10000,
          mimetype,
        },
      }
    ],
    type: 'javascript/auto'
  })
})

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin(Object.assign({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
}, project.globals)))

// Development Tools
// ------------------------------------
if (__DEV__) {
  config.entry.main.push(
    `webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`
  )
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  )
}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  )
}

module.exports = config
