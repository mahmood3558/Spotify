import { authEndpoint, clientId, redirectUri, scopes } from "../config.json";

const setToken = () => {
  return (
    <div className="login">
      <header className="login-header">
        <img
          src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg"
          className="login-logo"
          alt="logo"
        ></img>
        <a
          className="login-btn login-btn--login login-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
};

export default setToken;
