import logo from './../assets/chat.png';

const Header = () => {
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <a href="!#">
            <img width="60px" src={logo} alt="logo"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header;