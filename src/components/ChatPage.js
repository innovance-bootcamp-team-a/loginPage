/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  GetData,
  GetRoomNames,
  setData,
  createRoomCollection,
} from "../hooks/useData";
import ChatRoom from "./ChatRoom";
import RoomList from "./RoomList";
import _ from "lodash";

const ChatPage = () => {
  // Username from Login Page ( Main Page )
  const location = useLocation();
  const [username] = useState(location.state.username);

  // Chat Text Area - Input
  const [message, setMessage] = useState("");

  // Add New Room Input - Create new Room
  const [createRoomName, setCreateRoomName] = useState("");

  // Click on Rooms - Shows chats.
  const [selectedRoom, setSelectedRoom] = useState("");

  //
  const [roomNames] = GetRoomNames();

  const createRoom = () => {
    console.log("createRoom çalıştı");
    createRoomCollection(
      username,
      "Odayı oluşturdu.",
      _.toLower(createRoomName)
    );
    setCreateRoomName("");
  };

  const selectRoom = (roomId) => {
    console.log("selectRoom çalıştı");
    setSelectedRoom(roomId);
  };

  const handleSendData = () => {
    console.log("handleSendData çalıştı");
    setData(username, message, selectedRoom);
    setMessage("");
  };

  const [data] = GetData(selectedRoom);

  return (
    <div>
      Chat Page
      <RoomList
        value={createRoomName}
        onChange={(e) => setCreateRoomName(e.target.value)}
        onClick={createRoom}
        username={username}
        roomNames={roomNames}
        selectedRoom={selectRoom}
      ></RoomList>
      {!selectedRoom.length ? (
        <h1>Oda seçiniz</h1>
      ) : (
        <ChatRoom
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={handleSendData}
          data={data}
        />
      )}
    </div>
  );
};

export default ChatPage;
