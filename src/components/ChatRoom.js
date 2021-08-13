import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faVideo,
  faPhone,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import "./RoomList.css";

const ChatRoom = ({ value, onChange, onClick, data, selectedRoom }) => {
  return (
    <div>
      {!data.length ? (
        <h1>Herhangi bir mesaj girilmedi</h1>
      ) : (
        <div className="card">
          <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
              <div className="user_info">
                <span>{`${selectedRoom} odası`}</span>
              </div>
              <div className="video_cam">
                <span>
                  <FontAwesomeIcon icon={faVideo} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
            </div>
          </div>
          <div className="card-body msg_card_body">
            {data.map(({ id, name, message }) => {
              return (
                <div className="direct-chat-msg doted-border" key={id}>
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">{name}</span>
                  </div>
                  <div className="msg_cotainer">{message}</div>
                </div>
              );
            })}
          </div>
          <div className="card-footer">
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text attach_btn">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </div>
              <textarea
                value={value}
                onChange={onChange}
                className="form-control type_msg"
                placeholder="Type your message..."
              ></textarea>
              <div className="input-group-append">
                <span className="input-group-text send_btn">
                  <FontAwesomeIcon icon={faLocationArrow} onClick={onClick} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
