import { connect } from "react-redux"
import React from "react";

import ReactPaginate from 'react-paginate'

import Users from "./UsersPresentation"
import { toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "./../../redux/usersReducer"

import loader from "../../assets/loader.svg"
import "./pagination.css"

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 0,
            currentPage: 0
        };
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        // this.props.getUsersThunkCreator(this.props.pageNumber, this.props.pageSize)
        const perPage = Math.ceil(this.props.totalCount / this.props.pageSize)
        const offset = this.props.pageNumber * perPage;
        this.setState({
            currentPage: this.props.pageNumber,
            perPage: perPage,
            offset: offset
        }, () => {
            this.props.getUsersThunkCreator(this.props.pageNumber, this.props.pageSize)
        });
    }

    onPageChanged = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.props.getUsersThunkCreator(selectedPage, this.props.pageSize)
        });
    }

    render() {
        return (
            <div className="py-10 h-screen w-full bg-gray-300 px-2">
                { this.props.isFetching ?
                        <img className="mx-auto" src={loader} alt="loader" />
                    :   
                        <Users totalCount={this.props.totalCount}
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
            
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(this.props.totalCount / this.props.pageSize)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.onPageChanged}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        )
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