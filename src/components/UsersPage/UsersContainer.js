import { connect } from "react-redux"
import axios from "axios"
import React from "react";

import Users from "./UsersPresentation"
import { follow, unfollow, setUsersPageData, setCurrentPage, toggleIsFetching } from "./../../redux/usersReducer"

import loader from "../../assets/loader.svg"

class UsersContainer extends React.Component {

    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsersPageData(response.data)
        })
    }

    onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsersPageData(response.data)
          }
        )
    }

    render() {
      return <>
        { this.props.isFetching ? 
          <div className="py-10 h-screen w-full bg-gray-300 px-2 mx-auto" >
            <img className="mx-auto" src={loader} alt="loader"/>
          </div> : 
          <Users  totalCount = { this.props.totalCount }
                  pageSize = { this.props.pageSize }
                  currentPage = { this.props.currentPage }
                  onPageChanged = { this.onPageChanged }
                  users = { this.props.users }
                  follow = { this.props.follow }
                  unfollow = { this.props.unfollow }
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
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     follow,
//     unfollow,
//     setUsersPageData,
//     setCurrentPage,
//     toggleIsFetching
//   }

// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsersPageData,
  setCurrentPage,
  toggleIsFetching
})(UsersContainer)