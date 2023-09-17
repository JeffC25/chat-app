import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from "../utils/Authentication";
import Layout from "./Layout";

const Message = ({ userID, author, authorPic, body }) => {
    return (
        <div className={`flex items-start ${author == userID ? "flex-row-reverse" : "flex-row"} my-2`}>
            <div className="w-12 h-12 rounded-full bg-neutral-200 shadow-xl">
                <img src={authorPic} alt="" referrerPolicy="no-referrer" className="rounded-full" />
            </div>
            <div className="w-fit bg-neutral-200 rounded-2xl max-w-lg shadow-xl flex mx-2">
                <div className="m-4 text-neutral-700 break-all">
                    {body}
                </div>
            </div>
        </div>
    );
};

const Input = ({ user }) => {
    const [message, setMessage] = useState("")

    const sendMessage = (e) => {
        e.preventDefault()
        const db = getDatabase();

        const postData = {
            author: user.uid,
            body: message,
            authorPic: user.photoURL
        };

        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'posts')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/rooms/global/' + newPostKey] = postData;
        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        setMessage("")
        return update(ref(db), updates);
    }

    return (
        <form onSubmit={sendMessage} className="h-12 w-2/3 flex self-center shadow-lg">
            <input type="text"
                placeholder="Messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none text-neutral-700" />
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 text-blue-700">Send</button>
        </form>
    );
};

const ChatRoom = ({ user }) => {
    // const anchor = useRef();

    const { test } = useContext(AuthContext);
    console.log(test);
    const [messages, setMessages] = useState([""]);
    const db = getDatabase();

    const messageRef = ref(db, "/rooms/global/");
    useEffect(() => {
        onValue(messageRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setMessages((Object.values(data)).map(item => Message({ ...item, userID: user.uid, })));
        })

        return () => {
            
        }
    }, []);

    return (
        <Layout>
            <div className="h-screen w-screen flex flex-col fixed">
                <div className="overflow-y-scroll block flex-shrink-1 w-2/3 mx-auto">
                    <div className="self-center w-full h-screen flex flex-col px-4">
                        {...messages}
                        {/* <div ref={anchor}></div> */}
                    </div>
                </div>
                <div className="bottom-0 w-full h-fit pb-20">
                    <div className="h-20 w-full bg-transparent flex justify-center items-center">
                        {Input({ user })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatRoom;