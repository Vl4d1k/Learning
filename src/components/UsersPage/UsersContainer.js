import { connect } from "react-redux"
import React from "react";

import Users from "./UsersPresentation"
import { toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "./../../redux/usersReducer"

import loader from "../../assets/loader.svg"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.pageNumber, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      { this.props.isFetching ?
        <div className="py-10 h-screen w-full bg-gray-300 px-2 mx-auto" >
          <img className="mx-auto" src={loader} alt="loader" />
        </div> :
        <Users  totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}  
                users={this.props.users}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                toggleFollowingProgress={this.props.toggleFollowingProgress} 
                followingInProgress={this.props.followingInProgress}
        />
      }


    </>
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  toggleFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(UsersContainer)