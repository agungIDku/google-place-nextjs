import { Provider } from 'react-redux'
import { CacheProvider } from '@emotion/react'

import { useStore } from '../redux/store'
import createEmotionCache from '../utils/emotionCache'

const clientSideEmotionCache = createEmotionCache()

export default function App ({ Component, pageProps, emotionCache }: any) {
  const store = useStore(pageProps.initialReduxState)
  emotionCache = clientSideEmotionCache

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </Provider>
  )
}
