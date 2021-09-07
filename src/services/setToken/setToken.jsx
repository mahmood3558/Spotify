import React from "react";
import { useTranslation } from "react-i18next";

import { authEndpoint, clientId, redirectUri, scopes } from "../config.json";
import i18n from "../../i18n/i18n";

const SetToken = () => {
  document.cookie = i18n.language;

  const { t } = useTranslation();
  return (
    <div className="login-background">
      <select
        className="btn btn-secondary dropdown-toggle language"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
          document.cookie = e.target.value;
        }}
        value={i18n.language}
      >
        <option value="fa">فارسی</option>
        <option value="en">English</option>
      </select>
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
            {t("login")}
          </a>
        </header>
      </div>
    </div>
  );
};

export default SetToken;
