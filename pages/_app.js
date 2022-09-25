import AuthProvider from '../provider/AuthProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

MyApp.getInitalProps = async (appContext) => {
  const data = await App.getInitialProps(appContext);
  return data;
}

export default MyApp
