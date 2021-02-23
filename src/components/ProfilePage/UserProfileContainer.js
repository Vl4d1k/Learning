import { connect } from "react-redux"
import axios from "axios"
import React from "react";

import {setUserProfile} from "./../../redux/profileReducer"

import UserProfile from "./UserProfile"
import { withRouter } from "react-router-dom";

class UsersProfileContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <UserProfile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    "profile": state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfile })(withRouter(UsersProfileContainer))