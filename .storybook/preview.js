import '../src/styles/globals.css';

if (typeof global.process === 'undefined') {
  const worker = require('../.mocks/browser');
  worker.start();
  window.msw = { worker };
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
