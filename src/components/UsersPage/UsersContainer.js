import { connect } from "react-redux"

import Users from "./Users"
import { followAC, unfollowAC, setUsersAC } from "./../../redux/usersReducer"

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    follow: (user_id) => {
      dispatch(followAC(user_id))
    },
    unfollow: (user_id) => {
      dispatch(unfollowAC(user_id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)