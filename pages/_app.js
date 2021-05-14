import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Provider } from 'next-auth/client'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
