import React from "react";

const ChatRoom = ({ value, onChange, onClick, data }) => {
  return (
    <div>
      {!data.length ? (
        <h1>Herhangi bir mesaj girilmedi</h1>
      ) : (
        data.map(({ id, name, message }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <p>{message}</p>
            </div>
          );
        })
      )}
      <textarea value={value} onChange={onChange} rows="4" cols="50" />
      <button onClick={onClick}>Gönder</button>
    </div>
  );
};

export default ChatRoom;
