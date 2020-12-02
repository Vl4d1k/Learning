import Sidebar from './Sidebar'
import Profile from './Profile'


const Content = () => {
  return (
    <div className="flex flex-col md:flex-row" >
      <Sidebar />
      <Profile />

    </div>
  )
}

export default Content;