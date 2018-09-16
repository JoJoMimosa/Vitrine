const path = require('path');
const ext = ['js', 'css', 'scss'];

const yourAssetProcess = async ({name, bundler}) => {
  if (ext.indexOf(name.split('.').pop()) > -1 && bundler.options.production) {
    return {
      header: `/*! github.com/jojomimosa | MIT License */

      `,
      footer: ''
    }
  }
};

module.exports = yourAssetProcess;
