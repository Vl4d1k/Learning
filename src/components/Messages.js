const DialogsData = [
    { message: "Hey, Joel, I here to help you out please tell me", time: "11:26", name: "Jessica Koel", photo: "https://i.imgur.com/aq39RMA.jpg"},
    { message: "I will send you all documents as soon as possible", time: "12:26", name: "Komeial Bolger", photo: "https://i.imgur.com/eMaYwXn.jpg" },
    { message: "Are you going to business trip next week", time: "8:26", name: "Tamaara Suiale", photo: "https://i.imgur.com/zQZSWrt.jpg" },
    { message: "I suggest to start new business soon", time: "17:19", name: "Sam Nielson", photo: "https://i.imgur.com/agRGhBc.jpg" },
    { message: "We need to start new reseatch center.", time: "16:56", name: "Caroline Nexon", photo: "https://i.imgur.com/uIgDDDd.jpg" },
    { message: "May be yes", time: "11:25", name: "Patrick Koeler", photo: "https://i.imgur.com/tT8rjKC.jpg" }
]; 

const DialogItem = (props) => {
    return (
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
            <div className="flex ml-2"> <img src={props.photo} width={40} height={40} className="rounded-full" alt="avatar"/>
                <div className="flex flex-col ml-2"> <span className="font-medium text-black">{props.name}</span> 
                <span className="text-sm text-gray-400 truncate w-32">{props.message}</span> </div>
            </div>
            <div className="flex flex-col items-center"> <span className="text-gray-300">{props.time}</span> <i className="fa fa-star text-green-400" /> </div>
        </li>
    )
    
}

const Messages = () => {
    return (
        <div className="py-10 h-screen w-full bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
                <div className="md:flex">
                    <div className="w-full p-4">

                        <div className="relative"> <input type="text" className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..." /> <i className="fa fa-search absolute right-3 top-4 text-gray-300" /> </div>
                        <ul>

                            {DialogsData.map( dialog => ( <DialogItem  message={dialog.mess} time={dialog.time} name={dialog.name} photo={dialog.photo} />) )}                        

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;