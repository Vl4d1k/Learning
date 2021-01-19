import OnePost from './OnePost'

const Posts = () => {
  return (
    <div className="flex flex-wrap  justify-center justify-around" >
      
      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
        My Posts:
      </h3>

      <textarea className="w-full px-3 py-2 m-4 text-gray-700 border rounded-lg focus:outline-none" rows="3"></textarea>

      <a href="" className="flex justify-center border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
        Send
      </a>

      <OnePost postName="First Post"/>

      <OnePost postName="Second Post"/>

    </div>
  )
}

export default Posts;