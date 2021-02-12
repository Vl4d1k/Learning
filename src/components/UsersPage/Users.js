const Users = (props) => {
  return (
    <div className="py-10 h-screen w-full bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
        <div className="holder ml-3 mr-3">
            
            {/* card-item */}
            <div className="card border w-full hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
              <div className="profile w-full flex m-3 ml-4 text-white">
                <img className="w-28 h-28 p-1 bg-white rounded-full" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="" />
                <div className="title mt-11 ml-3 font-bold flex flex-col">
                  <div className="name break-words text-gray-600">Sarah</div>
                  {/*  add [dark] class for bright background */}
                  <div className="add font-semibold text-sm italic dark text-gray-600">Model</div>
                </div>
              </div>
              <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Follow</div>
                {/* <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> */}
              </div>
            </div>

        </div>
      </div>
    </div>
  )
} 

export default Users