import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV === 'development') {
  require('@/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
