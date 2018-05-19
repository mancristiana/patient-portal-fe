const { getLoader } = require('react-app-rewired');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = function override(config, env) {
  // get tsloader
  const tsloader = getLoader(
    config.module.rules,
    rule => String(rule.test) == String(/\.(ts|tsx)$/)
  );

  // set new options
  tsloader.options = {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory([
          {
            libraryName: 'antd',
            libraryDirectory: 'lib'
          },
          {
            libraryName: 'antd-mobile',
            libraryDirectory: 'lib'
          }
        ])
      ]
    })
  };
  return config;
};
