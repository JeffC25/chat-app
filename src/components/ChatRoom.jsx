import { getDatabase, ref, child, push, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from "../utils/Authentication";



const Message = ({user, content}) => {
    // TODO: Check if message is from current user
    const author = user
    const fromUser = (author != user);

    return (
        <div className={`flex items-start ${fromUser ? "flex-row-reverse" : "flex-row"} my-2`}>
            <div className="w-12 h-12 rounded-full bg-neutral-200 shadow-xl">
                <img src={user.photoURL} className="rounded-full"/>
            </div>
            <div className="w-fit bg-neutral-200 rounded-2xl max-w-lg shadow-xl flex mx-2">
                <div className="m-4 text-neutral-700 break-all">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Input = () => {
    const sendMessage = () => {
        const db = getDatabase();

    }

    return (
        <form onSubmit={sendMessage} className="h-12 w-2/3 flex self-center">
            <input type="text" placeholder="Messsage" className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 ">Send</button>
        </form>
    );
};

const Dock = () => {
    return(
        <div className="h-20 w-full bg-transparent flex justify-center items-center">
            {Input()}
        </div>
    );
};

const ChatRoom = () => {
    const auth = getAuth();
    const { user } = useContext(AuthContext);

    // TODO: Fetch messages from database
    const messages = [
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"test"}), 
        Message({user:user, content:"test"}), 
        Message({user:user, content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}), 
        Message({user:user, content:"yippee"}), 
        Message({user:user, content:"wahoo"}), 
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"Hello"}), 
        Message({user:user, content:"Hello"}), 
    ];

    return(
        <div className="h-screen w-screen flex flex-col fixed">
            <div className="overflow-y-scroll block flex-shrink-1 w-2/3 mx-auto">
                <div className="self-center w-full h-screen flex flex-col px-4">
                    {...messages}
                </div>
            </div>
            <div className="bottom-0 w-full h-fit pb-20">
                {Dock()}
            </div>
        </div>
    );
};

export default ChatRoom;