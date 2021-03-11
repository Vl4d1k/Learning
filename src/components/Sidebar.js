import { NavLink } from "react-router-dom";
import logo from '../assets/chat.png';
import { setAuthUserDataThunk } from "../redux/authReducer"
import React from "react"
import { connect } from "react-redux"


class SidebarContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserDataThunk();
  }
  render() {
    return <Sidebar {...this.props}/>
  }
}

const Sidebar = (props) => {
  return (
    <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:max-h-full z-10 w-full md:w-48">
      <div className="md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">

        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <div className="ml-2">
            <img width="45px" src={logo} alt="logo" />
            {props.isAuth ? <a href="/login" className="ml-2 text-white">{props.login}</a> : <a href="/login" className="ml-2 text-white">Login</a>}
          </div>
          <li className="mr-8 flex-1">
            <NavLink to="/profile" activeClassName="border-blue-500" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white active:text-gray-400 block md:inline-block">Profile</span>
            </NavLink>
          </li>
          <li className="mr-8 flex-1">
            <NavLink to="/messages" activeClassName="border-blue-500" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Messages</span>
            </NavLink>
          </li>
          <li className="mr-8 flex-1">
            <a href="/users" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fas fa-users pr-0 md:pr-3 "></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Users</span>
            </a>
          </li>
          <li className="mr-8 flex-1">
            <a href="!#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fas fa-chart-area pr-0 md:pr-3 "></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Music</span>
            </a>
          </li>
          <li className="mr-8 flex-1">
            <a href="!#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, login: state.auth.login, })

export default connect(mapStateToProps, {setAuthUserDataThunk})(SidebarContainer);