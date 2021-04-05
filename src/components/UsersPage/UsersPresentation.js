import React from "react";

import profile_photo from "./../../assets/profile_logo.png"
// import ReactPaginate from 'react-paginate'
// import { Pagination } from "react-custom-pagination";
import { NavLink } from "react-router-dom";

// import "./pagination.css"

let Users = props => {

    return (

            
        <div className="holder ml-3 mr-3">
            {props.users ? props.users.map((user, i) => <UsersCard key={i} followingInProgress={props.followingInProgress} unfollowThunkCreator={props.unfollowThunkCreator} followThunkCreator={props.followThunkCreator} toggleFollowingProgress={props.toggleFollowingProgress} data={user} />) : <div>Нет пользователей</div>}
        </div>
        
    )
}

let UsersCard = props => {

    let follow = () => {
        props.followThunkCreator(props.data.id)
    }

    let unfollow = () => {
        props.unfollowThunkCreator(props.data.id)
    }

    return (
        <div className="card border-4 w-full hover:shadow-2xl m-5 relative flex flex-col mx-auto">
            <NavLink to={"/users/profile/" + props.data.id}>
                <div className="profile w-full flex m-3 ml-4 text-white">
                    <img className="w-20 h-20 p-1 bg-white rounded-full" src={props.data.photos.large ? props.data.photos.large : profile_photo} alt="avatar" />
                    <div className="title mt-6 ml-3 font-bold flex flex-col">
                        <div className="name break-words text-gray-600">{props.data.name}</div>
                        <div className="add font-semibold text-sm italic text-gray-600">{props.data.status}</div>
                    </div>
                </div>
            </NavLink>
            <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                <button disabled={props.followingInProgress.some(id => id === props.data.id)} onClick={props.data.followed ? unfollow : follow} className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">{props.data.followed ? "Unfollow" : "Follow"}</button>
                <button className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">View</button>
            </div>
        </div>
    )

}

export default Users