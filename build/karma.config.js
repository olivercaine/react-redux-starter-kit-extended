const argv = require('yargs').argv
const webpackConfig = require('./webpack.config')

const TEST_BUNDLER = './tests/test-bundler.js'

const karmaConfig = {
  basePath: '../',
  browsers: ['ChromeHeadlessCustom'],
  customLaunchers: {
    ChromeHeadlessCustom: {
      base: 'ChromeHeadless',
      flags: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--disable-translate',
        '--disable-extensions',
        '--remote-debugging-port=9222'
      ]
    }
  },
  singleRun: !argv.watch,
  coverageReporter: {
    reporters: [
      { type: 'text-summary' },
    ],
  },
  files: [{
    pattern  : TEST_BUNDLER,
    watched  : false,
    served   : true,
    included : true
  }],
  frameworks: ['parallel', 'mocha'],
  parallelOptions: {
    executors: 4, // Defaults to cpu-count - 1
    shardStrategy: 'round-robin'
    // shardStrategy: 'description-length'
    // shardStrategy: 'custom'
    // customShardStrategy: function(config) {
    //   config.executors // number, the executors set above
    //   config.shardIndex // number, the specific index for the shard currently running
    //   config.description // string, the name of the top-level describe string. Useful //     for determining how to shard the current specs
    //   return config.
    // }
  },  
  reporters: ['mocha'],
  preprocessors: {
    [TEST_BUNDLER]: ['webpack'],
  },
  logLevel: 'WARN',
  browserConsoleLogOptions: {
    terminal: true,
    format: '%b %T: %m',
    level: '',
  },
  webpack: {
    entry: TEST_BUNDLER,
    devtool: 'cheap-module-source-map',
    module: webpackConfig.module,
    plugins: webpackConfig.plugins,
    resolve: webpackConfig.resolve,
    externals: {
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    },
  },
  webpackMiddleware: {
    stats: 'errors-only',
    noInfo: true,
  },
}

module.exports = (cfg) => cfg.set(karmaConfig)
