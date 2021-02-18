import React from "react";

class Users extends React.Component {

  componentDidMount(){
    this.setUsers()
  }

  setUsers = () => {
    if (this.props.users.length === 0){
      console.log("this.props.users.length: ", this.props.users.length)
      this.props.setUsers([
      { id: 1, isFollowed: true, fullName: "Sarah", profession: "Designer", avatar: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress" },
      { id: 2, isFollowed: false, fullName: "Ricky", profession: "Designer", avatar: "https://sun2.6789.userapi.com/s/v1/ig2/XPm59-anwj04J3iCzGan1-xEUIUUELaAL9lLMOoqWbqa-nLoVlBeMVW98OQ5olXgHEosP-Y3pN6orlNxcWs5o1zf.jpg?size=100x0&quality=96&crop=21,85,385,385&ava=1" },
      { id: 3, isFollowed: false, fullName: "Dexter", profession: "Director", avatar: "https://i.imgur.com/JFHjdNr.jpg" },
      { id: 4, isFollowed: true, fullName: "Johnny", profession: "CEO", avatar: "https://i.imgur.com/zLCYdR9.jpg" }
      ])
    }
  }
  
  render() {
    return (
      <div className="py-10 h-screen w-full bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
          <div className="holder ml-3 mr-3">
            {this.props.users ? this.props.users.map( (user, i) => <UsersCard key={i} follow={this.props.follow} unfollow={this.props.unfollow} data={user} /> ) : <div>Нет пользователей</div>}
          </div>
        </div>
      </div>
    ) 
  }
}


class UsersCard extends React.Component {
  
  // constructor(props){
  //   super(props)
  // }

  follow = () => {
    this.props.follow(this.props.data.id)
  }

  unfollow = () => {
    this.props.unfollow(this.props.data.id)
  }

  render() {
    return (
      <div className="card border-4 w-full hover:shadow-2xl m-5 relative flex flex-col mx-auto">
        <div className="profile w-full flex m-3 ml-4 text-white">
          <img className="w-28 h-28 p-1 bg-white rounded-full" src={this.props.data.avatar} alt="avatar" />
          <div className="title mt-11 ml-3 font-bold flex flex-col">
            <div className="name break-words text-gray-600">{this.props.data.fullName}</div>
            <div className="add font-semibold text-sm italic text-gray-600">{this.props.data.profession}</div>
          </div>
        </div>
        <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
          <div onClick={this.props.data.isFollowed ? this.unfollow : this.follow} className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">{this.props.data.isFollowed ? "Unfollow" : "Follow"}</div>
          <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">View</div>
        </div>
      </div>
    )
  }
}

export default Users