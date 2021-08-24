import { authEndpoint, clientId, redirectUri, scopes } from "../config.json";

const setToken = () => {
  return (
    <div>
      <a
        className="btn btn--loginApp-link"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotifyyyyyyyyyyyyyyyyyyy
      </a>
      <p></p>
    </div>
  );
};

export default setToken;
