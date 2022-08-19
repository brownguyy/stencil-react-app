import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
export const config: Config = {
  namespace: 'input-plugin',
  outputTargets: [
    react({
      componentCorePackage: 'input-plugin',
      proxiesFile: '../../binding/react-input-component/src/components/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
