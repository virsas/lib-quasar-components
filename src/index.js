function extendConf (conf, api) {
  conf.boot.push('~@virsas/quasar-app-extension-components/src/boot/index.js')
  conf.build.transpileDependencies.push(/@virsas[\\/]quasar-app-extension-components[\\/]src/)
}

module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app-webpack', '^3.0.0')

  // Add our components to quasar config
  api.extendQuasarConf(extendConf)
}
