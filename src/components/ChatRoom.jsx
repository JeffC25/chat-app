import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from "../utils/Authentication";
import Layout from "./Layout";
import { useParams } from "react-router";
import { sendMessage } from "../utils/database"

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

const Input = ({ user, id }) => {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(message == "") {
            return 
        } else {
            sendMessage(user.email, user.photoURL, id, message);
            setMessage("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="h-12 w-2/3 flex self-center shadow-lg">
            <input type="text"
                placeholder="Messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="false"
                className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none text-neutral-700" />
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 text-blue-700">Send</button>
        </form>
    );
};

const ChatRoom = ({ user }) => {
    const anchor = useRef()

    const { id } = useParams();
    const [messages, setMessages] = useState([""]);
    const db = getDatabase();

    const messageRef = ref(db, `/rooms/${id}`);

    useEffect(() => {
        onValue(messageRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            console.log("message recieved")
            setMessages((Object.values(data)).map(item => Message({ ...item, userID: user.uid, })));
            anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
        })

        return () => {
            
        }
    }, []);

    return (
        <Layout>
            <div className="h-screen w-screen flex flex-col fixed pb-40">
                <div className="overflow-y-auto flex-shrink-1 w-2/3 mx-auto flex-row justify-between">
                        {...messages}
                    <div ref={anchor} className="w-full h-20"></div>
                </div>
                <div className="block fixed bottom-0 w-full h-fit">
                    <div className="h-20 w-full bg-transparent flex justify-center items-center">
                        {Input({ user, id })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatRoom;