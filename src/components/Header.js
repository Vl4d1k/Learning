import logo from '../assets/chat.png';
// import {setAuthUserDataThunk} from "./../redux/authReducer"

class HeaderContainer extends React.Component {
  // componentDidMount(){
  //   this.props.setAuthUserDataThunk();
  // }
  render() {
    return <Header />
  }
}

const Header = () => {
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <a href="!#">
            <img width="45px" src={logo} alt="logo"/>
          </a>
          <a href="/login">
            Log in
          </a>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {setAuthUserDataThunk})(HeaderContainer);