import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import SimpleReactLightbox from 'simple-react-lightbox'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SimpleReactLightbox>
        <Script defer data-domain="ecofriendsltd.com" src="https://plausible.io/js/script.js" Script/>

          <Component {...pageProps} />
        </SimpleReactLightbox>
        <ToastContainer />
      </PersistGate>
    </Provider>

  )
}

export default MyApp
