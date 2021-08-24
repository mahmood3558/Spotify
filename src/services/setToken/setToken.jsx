import { authEndpoint, clientId, redirectUri, scopes } from "../config.json";
import hash from "./hash";

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
      <p>{hash.access_token}</p>
    </div>
  );
};

export default setToken;
