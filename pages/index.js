import { useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useAuth } from "../provider/AuthProvider";
import { getCookie, setCookie } from 'cookies-next';
import cookies from "next-cookies";
const Index = (props) => {

  const { token, setToken, refresh, setRefresh } = useAuth();

  useEffect(() => {
    if (!token && props.access_token) {
      setToken(props.access_token);
      setRefresh(props.refresh_token);
      setCookie('access_token', props.access_token);
      setCookie('refresh_token', props.refresh_token);
    }
  }, [props.access_token, props.refresh_token, setToken, setRefresh, token]);

  if (token) {
    Router.push("/dashboard");
  }

  return (
  <div>
    {
        token ?
          (
            <div>
              <h1>Logged in</h1>
            </div>
          ) : (
            <div>
              <h1>Not logged in lol</h1>
              <a href="http://localhost:4000/login">Login xd</a>
            </div>
          )
      }
      </div>
  );

}

export default Index;

export async function getServerSideProps(context) {
  const { access_token, refresh_token } = context.query;

  if (!cookies(context).access_token && access_token) {

     return {
    props: {
      access_token,
      refresh_token
    }, // will be passed to the page component as props
  }

  }

  return {
    props: {
      access_token: null,
      refresh_token: null
    }
  }
}
