const Message = (content, fromUser) => {
    // TODO: Check if message is from current user
    return (
        
        <div className={`flex items-center ${fromUser ? "flex-row-reverse" : "flex-row"} `}>
            <div className="w-12 h-12 rounded-full bg-neutral-200">
                <img src=""/>
            </div>
            <div className="w-fit bg-neutral-200 m-2 rounded-full">
                <div className="m-4 text-neutral-700">
                    {content}
                </div>
            </div>
        </div>
    )
}

const Converstation = (messages) => {
    return (
        <div className="h-max flex-grow-1 fixed self-center w-3/4">
            {...messages}
        </div>
    );
};


const Input = () => {
    return (
        <form className="h-12 w-2/3 flex self-center">
            <input type="text" placeholder="Messsage" className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 ">Send</button>
        </form>
    );
};

const Dock = () => {
    return(
        <div className="h-20 w-full bg-transparent fixed bottom-0 flex justify-center items-center">
            {Input()}
        </div>
    );
};

const ChatRoom = () => {
    // TODO: Fetch messages from database
    const messages = [Message("Hello", true), Message("World", false)];

    return(
        <div className="flex flex-col h-full">
            {Converstation(messages)}
            {Dock()}
        </div>
    );
};

export default ChatRoom;