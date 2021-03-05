import profile_photo from "../../../assets/profile_logo.png"

const OnePost = (props) => {
  return (
      <div className="flex w-full items-center font-sans md:p-6">
        <img className="w-10 h-10 rounded-full" src={profile_photo} alt="author" />
        <div className="flex-1">
          <p className="text-base font-bold text-base md:text-xl leading-none">{props.postName}</p>
          <p className="text-gray-600 text-xs md:text-base">I started learn React JS</p>
        </div>
        <div className="justify-end">
          <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
        </div>
      </div>
  )
}

export default OnePost;