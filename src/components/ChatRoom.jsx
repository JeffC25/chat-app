const Message = (content) => {
    // TODO: Check if message is from current user
    const fromUser = false;
    return (
        <div className={`flex items-start ${fromUser ? "flex-row-reverse" : "flex-row"} my-2`}>
            <div className="w-12 h-12 rounded-full bg-neutral-200 shadow-xl">
                <img src=""/>
            </div>
            <div className="w-fit bg-neutral-200 rounded-2xl max-w-lg shadow-xl flex mx-2">
                <div className="m-4 text-neutral-700 ">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Converstation = (messages) => {
    return (
        <div className="self-center w-full flex flex-col overflow-auto">
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
        <div className="h-20 w-full bg-transparent flex justify-center items-center">
            {Input()}
        </div>
    );
};

const ChatRoom = () => {
    // TODO: Fetch messages from database
    const messages = [
        Message("Hello"), 
        Message("A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long reply"),
        Message("1"),
        Message("2"),
        Message("3"),
        Message("Test test"),
        Message("Test"),
        Message("yipee")
    ];

    return(
        <div className="h-screen w-screen flex flex-col fixed">
            <div className="overflow-y-scroll block flex-shrink-1 w-2/3 mx-auto">
                {Converstation(messages)}
            </div>
            <div className="bottom-0 w-full h-fit pb-20">
                {Dock()}
            </div>
        </div>
    );
};

export default ChatRoom;