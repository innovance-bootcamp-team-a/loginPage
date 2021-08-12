import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({
  value,
  onChange,
  onClick,
  roomNames,
  username,
  selectedRoom,
}) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={onClick}> Add New Room </button>
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
              <div>
                <button onClick={() => selectedRoom(id)}>{roomName}</button>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default RoomList;
