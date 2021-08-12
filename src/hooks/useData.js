/* eslint-disable no-console */
import { useEffect, useState } from "react";
import firebase, { firestore } from "../firebase/firebase";
import _ from "lodash";

export const GetRoomNames = (deps = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const unsubscribe = firestore
        .collection("rooms")
        .onSnapshot((snapshot) => {
          const roomNames = snapshot.docs.map((doc) => {
            return {
              id: _.toLower(doc.id),
              roomName: _.startCase(_.toLower(doc.id)),
            };
          });
          console.log("roomNames ? ", roomNames);
          setData(roomNames);
        });

      return unsubscribe;
    }
    fetchData();
  }, deps);

  return [data, setData];
};

export const GetData = (roomName, deps = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const unsubscribe = firestore
        .collection("rooms")
        .doc(roomName)
        .collection(roomName)
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((snapshot) => {
          const posts = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.log("posts", posts);
          setData(posts);
        });

      return unsubscribe;
    }
    roomName.length && fetchData();
  }, [roomName]);

  return [data, setData];
};

export const setData = (name, message, roomName) => {
  console.log("clicked setData");
  if (roomName.length) {
    firestore.collection("rooms").doc(roomName).collection(roomName).add({
      name: name,
      message: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
};

export const createRoomCollection = (name, message, roomName) => {
  const db = firestore.collection("rooms").doc(roomName);
  db.set({});
  db.collection(roomName).add({ name: name, message: message });
};
