import { connect } from "react-redux"
import React from "react";

import { getAuthUserDataThunkCreator, getUserStatusThunkCreator, setUserStatus } from "./../../redux/profileReducer"

import UserProfile from "./UserProfile"
import { withRouter } from "react-router-dom";

class UsersProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreator(this.props.match.params.id)
    this.props.getUserStatusThunkCreator(this.props.match.params.id)
  }

  render() {
    return <UserProfile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  "profile": state.profilePage.profile,
  "status": state.profilePage.status
})


export default connect(mapStateToProps, { getAuthUserDataThunkCreator, getUserStatusThunkCreator, setUserStatus })(withRouter(UsersProfileContainer))