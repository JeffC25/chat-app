import { getDatabase, ref, set, push, get, child } from "firebase/database";


// a function to add a user object (just an email queried by email)
// this should be called on a user authentication to make sure their email is in the DB
export function addUserByUID(uid, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + uid), {
    email: email
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
