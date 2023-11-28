const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    // configure: (webpackConfig, { env, paths }) => {
    //   if (env === 'development') {
    //     // 修改 webpackConfig 以适应开发环境
    //   } else if (env === 'production') {
    //     // 修改 webpackConfig 以适应生产环境
    //   }
    //   return webpackConfig;
    // },
    // configure: (webpackConfig, { env, paths }) => {
    //   console.log(env, 'webpackConfig');
    //   // 找到 DefinePlugin 解决命令启动报警告的问题
    //   const definePluginIndex = webpackConfig.plugins.findIndex(
    //     (plugin) => plugin.constructor.name === 'DefinePlugin'
    //   );
    //   // 如果找到了 DefinePlugin，就移除它
    //   if (definePluginIndex !== -1) {
    //     webpackConfig.plugins.splice(definePluginIndex, 1);
    //   }
    //   return webpackConfig;
    // },
    // configure: (webpackConfig, { env, paths }) => {
    //   // 获取 .env 文件中的环境变量
    //   const envs = dotenv.config().parsed || {};

    //   // 从 plugins 列表中找到 DefinePlugin
    //   const definePluginIndex = webpackConfig.plugins.findIndex(
    //     (plugin) => plugin.constructor.name === 'DefinePlugin'
    //   );

    //   if (definePluginIndex !== -1) {
    //     // 如果找到了 DefinePlugin，添加新的环境变量
    //     const definePlugin = webpackConfig.plugins[definePluginIndex];

    //     Object.keys(envs).forEach((key) => {
    //       if (key !== 'NODE_ENV') {
    //         definePlugin.definitions[`process.env.${key}`] = JSON.stringify(envs[key]);
    //       }
    //     });
    //   } else {
    //     // 如果没有找到 DefinePlugin，创建一个新的
    //     const definePlugin = new webpack.DefinePlugin({});

    //     Object.keys(envs).forEach((key) => {
    //       if (key !== 'NODE_ENV') {
    //         definePlugin.definitions[`process.env.${key}`] = JSON.stringify(envs[key]);
    //       }
    //     });

    //     webpackConfig.plugins.push(definePlugin);
    //   }

    //   return webpackConfig;

    // },

  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
