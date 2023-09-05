const esbuild  = require('esbuild');
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

const htmlBundle = require('./html-bundle.cjs');

esbuild.build({
  entryPoints: ['./src/index.cjs'],
  bundle: true,
  outdir: 'dist/',
  metafile: true,
  plugins: [
    htmlPlugin(htmlBundle),
  ],
    "jsxFactory": "h",
 //   "jsxFragmentFactory": "Fragment"
}).catch(() => process.exit());
