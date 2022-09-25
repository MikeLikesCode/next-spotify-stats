import { getCookie } from "cookies-next";
import cookies from "next-cookies";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProfile, getTracks, getArtist, getFollowed, getPlaylist} from "./api/spotify"

export default function Dashboard() {

  return (
    <div>
      <UserProfile />
    </div>
  )
}

function UserProfile() {
  const [profileData,  setProfileData] = useState(null);

  useEffect(() => {
  const refresh = getCookie('refresh_token');
    (async () => {
      const data = await getProfile(refresh);

      setProfileData(data);
    })();

  }, [])

  if (!profileData) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">

      <div>{ profileData.display_name }</div>
      <Image
        className="rounded-full"
                  src={profileData.images[0] ? profileData.images[0].url : "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png"}
                  alt="Album Cover"
                  width={130}
                  height={130}
      />
          <p className="capitalize">
                  Spotify {profileData.product !== "open" ? profileData.product : "Free"} Member
          </p>
    </div>
  )
}


export async function getServerSideProps(context) {

  const token = cookies(context).access_token;
  const refresh = cookies(context).refresh_token;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {

    },
  }

}
