import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { useContext, useState, useEffect, useRef } from 'react';
import Layout from "./Layout";
import { useParams } from "react-router";
import { sendMessage } from "../utils/database"

const Message = ({ userEmail, author, authorPic, body }) => {
    return (
        <div className={`flex items-start ${author == userEmail ? "flex-row-reverse" : "flex-row"} my-2`}>
            <div className="w-12 h-12 rounded-full bg-neutral-200 shadow-md flex-shrink-0">
                <img src={authorPic} alt="" referrerPolicy="no-referrer" className="rounded-full" />
            </div>
            <div className="w-fit bg-neutral-200 rounded-2xl max-w-lg shadow-md flex mx-2">
                <div className="m-4 text-neutral-700 break-words">
                    {body}
                </div>
            </div>
        </div>
    );
};

const Input = ({ user, id }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message == "") {
            return 
        } else {
            sendMessage(user.uid, user.photoURL, id, message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="h-20 p-4 w-full flex justify-center">
            <input type="text"
                placeholder="Messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="false"
                className="h-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none text-neutral-700 w-2/3 shadow-md" />
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 text-blue-700 shadow-md hover:bg-neutral-400">Send</button>
        </form>
    );
};

const ChatRoom = ({ user }) => {

    const email = user.uid;
    const anchor = useRef();

    const { id } = useParams();
    const [messages, setMessages] = useState([""]);
    const db = getDatabase();

    const messageRef = ref(db, `/rooms/${id}`);

    useEffect(() => {
        // need setTimeout to work...?
        setTimeout(function () {
            anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
        }, 0);
        
        onValue(messageRef, (snapshot) => {
            const data = snapshot.val();
            setMessages((Object.values(data)).map(item => Message({ ...item, userEmail: email, })));
            setTimeout(function () {
                anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 0);
        });

        return () => {
            
        }
    }, []);

    return (
        <Layout>
            <div className="h-screen w-screen flex flex-col fixed">
                <div className="overflow-y-auto flex-shrink-1 md:w-2/3 mx-auto flex-row justify-between px-4 mb-40">
                    {...messages}
                    <div ref={anchor} className="w-full h-0"></div>
                </div>
                <div className="fixed bottom-0 w-full flex justify-center">
                    {/* <button onClick={() => console.log(anchor.current?.getBoundingClientRect().y)} className="h-20 w-20 bg-red-400">check</button> */}
                    {Input({ user, id })}
                </div>
            </div>
        </Layout>
    );
};

export default ChatRoom;