import Image from "next/image";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Image
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          width={300}
          height={100}

          alt="Spotify Logo"
        />
        <a href="http://localhost:4000/login">LOGIN WITH SPOTIFY</a>
      </div>
    </div>
  );
}

