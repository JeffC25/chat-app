import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { useContext, useState, useEffect, useRef } from 'react';
import Layout from "./Layout";
import { useParams } from "react-router";
import { sendMessage } from "../utils/database"

const Message = ({ userEmail, author, authorPic, body }) => {
    return (
        <div className={`flex items-start ${author == userEmail ? "flex-row-reverse" : "flex-row"} my-2`}>
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
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message == "") {
            return 
        } else {
            sendMessage(user.email, user.photoURL, id, message);
            setMessage("");
        }
    };

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

    const email = user.email;
    const anchor = useRef();

    const { id } = useParams();
    const [messages, setMessages] = useState([""]);
    const db = getDatabase();

    const messageRef = ref(db, `/rooms/${id}`);

    useEffect(() => {
        // needs time out to work ?
        setTimeout(function () {
            anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
        }, 0);
        
        onValue(messageRef, (snapshot) => {
            const data = snapshot.val();
            console.debug(data);
            setMessages((Object.values(data)).map(item => Message({ ...item, userEmail: email, })));
            // anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });

            // needs time out to scroll all the way down?
            setTimeout(function () {
                anchor.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 0);
        });

        return () => {
            
        }
    }, []);

    return (
        <Layout>
            <div className="h-screen w-screen flex flex-col fixed pb-40">
                <div className="overflow-y-auto flex-shrink-1 w-2/3 mx-auto flex-row justify-between px-4">
                        {...messages}
                    <div ref={anchor} className="w-full"></div>
                </div>
                <div className="block fixed bottom-0 w-full h-fit">
                    <div className="h-20 w-full bg-transparent flex justify-center items-center">
                        {/* <button onClick={() => console.log(anchor.current?.getBoundingClientRect().y)} className="h-20 w-20 bg-red-400">check</button> */}
                        {Input({ user, id })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatRoom;