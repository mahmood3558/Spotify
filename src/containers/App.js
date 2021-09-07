import { ToastContainer, toast } from "react-toastify";

import Spotify from "../components/spotify";
import hash from "../services/setToken/hash";
import SetToken from "../services/setToken/setToken";

function App() {
  const accessToken = hash.access_token;

  return (
    <div>
      {(() => {
        if (accessToken == null) {
          return (
            <div>
              <SetToken></SetToken>
            </div>
          );
        } else {
          return (
            <div>
              <Spotify></Spotify>
            </div>
          );
        }
      })()}
      <ToastContainer />
    </div>
  );
}

export default App;
