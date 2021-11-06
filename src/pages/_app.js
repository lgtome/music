import '../../styles/index.scss'
import '@fontsource/cagliostro'
import {wrapper} from '../redux/store'


function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
