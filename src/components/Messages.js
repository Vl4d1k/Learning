import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
            <div className="flex ml-2"> <img src={props.photo} width={40} height={40} className="rounded-full" alt="avatar"/>
                <div className="flex flex-col ml-2"> <span className="font-medium text-black">{props.name}</span> 
                <span className="text-sm text-gray-400 truncate w-32">{props.lastMessage}</span> </div>
            </div>
            <div className="flex flex-col items-center"> <span className="text-gray-300">{props.time}</span> <i className="fa fa-star text-green-400" /> </div>
        </li>
    )
    
}

const Messages = (props) => {
    return (
        <div className="py-10 h-screen w-full bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
                <div className="md:flex">
                    <div className="w-full p-4">

                        <div className="relative"> <input type="text" className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..." /> <i className="fa fa-search absolute right-3 top-4 text-gray-300" /> </div>
                        <ul>

                            {props.state.dialogs.map( dialog => (

                                <NavLink to={{
                                    pathname: "/messages/" + dialog.id,
                                }}>
                                    <DialogItem key={dialog.id}  lastMessage={dialog.messages[0].text} 
                                        time={dialog.time} name={dialog.name} photo={dialog.photo} />
                                </NavLink>
                            
                            ) )}                        

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;