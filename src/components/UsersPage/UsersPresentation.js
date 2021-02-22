import React from "react";

import profile_photo from "./../../assets/profile_logo.png"
import { Pagination } from "react-custom-pagination";


let Users = props =>  {
    return (
      <div className="py-10 h-screen w-full bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
          <div className="holder ml-3 mr-3">
            {props.users ? props.users.map( (user, i) => <UsersCard key={i} follow={props.follow} unfollow={props.unfollow} data={user} /> ) : <div>Нет пользователей</div>}
          </div>
        </div>
        <div className="py-2">
          <nav className="block">
            <Pagination
              totalPosts={props.totalCount}
              postsPerPage={props.pageSize}
              paginate={props.onPageChanged}
              view={15}
            />
          </nav>
        </div>
      </div>
    ) 
  }

let UsersCard = props => {
  
  let follow = () => {
    props.follow(props.data.id)
  }

  let unfollow = () => {
    props.unfollow(props.data.id)
  }

  return (
    <div className="card border-4 w-full hover:shadow-2xl m-5 relative flex flex-col mx-auto">
      <div className="profile w-full flex m-3 ml-4 text-white">
        <img className="w-28 h-28 p-1 bg-white rounded-full" src={props.data.photos.large ? props.data.photos.large : profile_photo} alt="avatar" />
        <div className="title mt-11 ml-3 font-bold flex flex-col">
          <div className="name break-words text-gray-600">{props.data.name}</div>
          <div className="add font-semibold text-sm italic text-gray-600">{props.data.status}</div>
        </div>
      </div>
      <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
        <div onClick={props.data.followed ? unfollow : follow} className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">{props.data.followed ? "Unfollow" : "Follow"}</div>
        <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">View</div>
      </div>
    </div>
  )

}

export default Users