import { Link } from "react-router-dom";
import Layout from "./Layout"
import { getUsersFriends } from "../utils/database";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const userCard = (user) => {
    const name = user.name;
    return (
        <Link to="/" className="flex w-1/2 h-24 bg-[rgba(0,0,0,0.25)] hover:bg-[rgba(0,0,0,0.5)] p-2 rounded-full mx-auto my-2 items-center" >
            <img src={user.photo} alt="" className=" aspect-square w-20 h-20 object-cover rounded-full bg-transparent p-1"/>
            <div className=" pl-2 h-full align-middle items-center flex overflow-clip text-ellipsis text-neutral-200 text-xl">
                {name}
            </div>
        </Link>
    )
}

const Conversations = ({user}) => {
    // const location = useLocation();
    // // const path = location.pathname;
    // const params = new URLSearchParams(location.search);
    const [userFriendList, setUserFriendList] = useState([]);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            async function effect() {
                setUserFriendList(await getUsersFriends(auth.currentUser.email));
            }
            effect();
        } else {

        }
      });

    return (
        <Layout>
            <div className="h-full w-screen flex flex-col absolute justify-center -mt-20 -z-10">
                <div className="overflow-y-scroll w-full mx-auto h-3/4 ">
                    {userFriendList.map((user) => {
                        return userCard(user)})};
                </div>
            </div>
        </Layout>
    )
}

export default Conversations;