import '../styles/globals.css'
import { wrapper, store , persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
