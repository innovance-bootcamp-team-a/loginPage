/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RoomList.css";
import { Image } from "../images/Image";

const RoomList = ({
  value,
  onChange,
  onClick,
  roomNames,
  username,
  selectedRoom,
}) => {
  return (
    <div className="card mb-sm-3 mb-md-4 contacts_card">
      <div className="card-header">
        <div className="input-group">
          <input
            type="text"
            placeholder="Oda Ekle..."
            value={value}
            onChange={onChange}
            className="form-control search"
          />
          <div className="input-group-prepend">
            <span className="input-group-text search_btn">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>
        <div className="pulse-btn">
          <button className="btn btn-primary" onClick={onClick}>
            Oda Ekle
          </button>
        </div>
      </div>
      <img src={Image.Room} alt="cooltext" height="60px" />
      <div className="card-body contacts_body">
        <ui className="contacts list-group list-group-flush">
          {!roomNames.length ? (
            <h1>Oda oluşturunuz.</h1>
          ) : (
            roomNames.map(({ id, roomName }) => {
              return (
                <Link
                  key={roomName}
                  to={{
                    pathname: `/rooms/${roomName}`,
                    state: {
                      username,
                    },
                  }}
                >
                  <li className="leaderboard__profiles">
                    <article className="leaderboard__profile">
                      <span
                        className="leaderboard__name"
                        onClick={() => selectedRoom(id)}
                      >
                        {roomName}
                      </span>
                    </article>
                  </li>
                </Link>
              );
            })
          )}
        </ui>
      </div>
    </div>
  );
};

export default RoomList;
