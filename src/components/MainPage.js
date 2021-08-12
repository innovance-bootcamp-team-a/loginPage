import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";

const MainPage = () => {
  const [username, setUsername] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    history.push({
      pathname: "/rooms",
      state: { username },
    });
  };

  return (
    <div className="">
      <div className="main-bg">
        <div className="login-container text-c animated flipInX">
          <div>
            <h1 className="logo-badge text-whitesmoke">
              <FontAwesomeIcon icon={faUserCircle} />
            </h1>
          </div>
          <p className="text-whitesmoke">Giriş yap</p>
          <div className="container-content">
            <form className="margin-t">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required=""
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="form-button button-l margin-b"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </form>
            <p className="margin-t text-whitesmoke">
              <small> Chat Application &copy; 2021</small>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
