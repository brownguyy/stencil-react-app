import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'button-plugin',
  globalStyle: 'www/styles.css',
  outputTargets: [
    react({
      componentCorePackage: 'button-plugin',
      proxiesFile: '../../binding/component-library-react/src/components/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      // esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
