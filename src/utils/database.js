import { getDatabase, ref, set, push, get, child } from "firebase/database";
//these are two helper functions, one will convert a UID to an email,
//the other will convert an email to UID
export async function getUIDByEmail(email) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users`));
  const list = snapshot.val();
  for (const key in list) {
    if (list[key].email == email) {
      return key
    }
  }
}
export async function getEmailByUID(uid) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/${uid}`));
  const snapVal = snapshot.val();
  return snapVal.email;
}

// a function to add a user object (just an email queried by email)
// this should be called on a user authentication to make sure their email is in the DB
export function addUserByUID(uid, email, name, photo) {
  const db = getDatabase();
  set(ref(db, 'users/' + uid), {
    name: name,
    photo: photo,
    email: email,
  });
}

//this is an async function that will generate a list of emails
//of all users 
export async function getListOfUsers() {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users`));
  const list = snapshot.val();
  let emailList = [];
  for (const key in list) {
    emailList.push(list[key].email);
  }
  return emailList;
}

//creates and stores a new room to the database and stores the room id in the
// /users/uid/rooms object
export async function createRoom(user_email, other_email) {
  //first we create the room
  const db = getDatabase();
  const dbRef = ref(getDatabase()).push();
  var roomKey = dbRef.key();

  const memberStruct = [await getUIDByEmail(user_email), await getUIDByEmail(other_email)];
  
  var chatRoomData = {
    id: roomKey,
    messages: {},
    users: memberStruct
  }

  push(ref(db, 'rooms/'), chatRoomData);

  //store room data
  var roomKeyData = {
    id: roomKey,
    roomKey: roomKey
  }
  push(ref(db, 'users/' + memberStruct[0] + '/rooms'), roomKeyData);
  push(ref(db, 'users/' + memberStruct[1] + '/rooms'), roomKeyData);
}

// get all rooms of a user
export async function getUsersRooms(user_email) {
  const uid = await getUIDByEmail(user_email);
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'users/' + uid + '/rooms'))
  const value = snapshot.val();
  var roomList = [];
  for (const key in value) { //because of auto keys this should go chronologically
    roomList.push(
      key
    )
  }
  return roomList;
}

// send message
export async function sendMessage(sender_email, room_id, message) {
  var msgData = {
    sender: sender_email,
    message: message
  }
  push(ref(db, 'rooms/' + room_id + '/messages'), msgData);
}
// get all messages from room
export async function getRoomMessages(room_id) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'rooms/' + room_id + '/messages'))
  const value = snapshot.val();
  var msgList = [];
  for (const key in value) { //because of auto keys this should go chronologically
    msgList.push({
      sender: value[key].sender,
      message: value[key].message
    })
  }
  return msgList;
}

//this is an async function that will create a chat between two users
//it takes in (all string) a sender email, receiver email, and initial message
// it updates the database, also good for just sending a chat
//now not necessary 
/* export async function sendAMessage(sender_email, receiver_email, message) {
  const db = getDatabase();
  const sender_uid = await getUIDByEmail(sender_email);
  const receiver_uid = await getUIDByEmail(receiver_email);
  var payload = {};
  payload["type"] = "sent"
  payload["message"] = message
  push(ref(db, 'messages/' + sender_uid + '/' + receiver_uid), payload);
  payload["type"] = "received"
  push(ref(db, 'messages/' + receiver_uid + '/' + sender_uid), payload);
} */


//this function takes in a user email + someone they are chatting with and will return
//a list chronological chats of the form {type: str, message: str} or an empty list
// deprecated?
/*
export async function getListOfMessages(user_email, recipient_email) {
  const user_uid = await getUIDByEmail(user_email);
  const recipient_uid = await getUIDByEmail(recipient_email);
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'messages/' + user_uid + '/' + recipient_uid))
  const value = snapshot.val();
  var msgList = [];
  for (const key in value) { //because of auto keys this should go chronologically
    msgList.push({
      type: value[key].type,
      message: value[key].message
    })
  }
  return msgList;
}*/


//deprecated
// this function returns every user email that the given account email has open chats with
/* export async function getListOfFriends(user_email) {
  const user_uid = await getUIDByEmail(user_email);
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'messages/' + user_uid))
  const value = snapshot.val();
  var emailList = [];
  for (const key in value) { //because of auto keys this should go chronologically
    emailList.push(
      await getEmailByUID(key)
    )
  }
  return emailList;
} */

//this function will return the top message that the given pair last had in conversation
//deprecated
/*
export async function getMostRecentMessage(user_email, recipient_email) {
  const msgList = await getListOfMessages(user_email, recipient_email)
  const message = msgList[msgList.length - 1];
  return message;
}*/
