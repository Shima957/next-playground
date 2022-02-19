import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
