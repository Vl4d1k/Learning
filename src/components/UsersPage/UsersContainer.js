import { connect } from "react-redux"
import axios from "axios"
import React from "react";

import Users from "./UsersPresentation"
import { followAC, unfollowAC, setUsersPageDataAC, setCurrentPageAC } from "./../../redux/usersReducer"

class UsersContainer extends React.Component {

    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsersPageData(response.data)
        })
    }

    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.setUsersPageData(response.data)
          }
        )
    }

    render() {
      return <Users totalCount = { this.props.totalCount }
                    pageSize = { this.props.pageSize }
                    currentPage = { this.props.currentPage }
                    onPageChanged = { this.onPageChanged }
                    users = { this.props.users }
                    follow = { this.props.follow }
                    unfollow = { this.props.unfollow }
      />
    }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
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
    setUsersPageData: (payload) => {
      dispatch(setUsersPageDataAC(payload))
    },
    setCurrentPage: (page_number) => {
      dispatch(setCurrentPageAC(page_number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)