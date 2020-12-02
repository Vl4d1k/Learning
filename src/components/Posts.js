const Posts = () => {
  return (
    <div className="flex flex-wrap  justify-center justify-around" >
      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
        My Posts:
      </h3>

      <textarea class="w-11/12 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>

      <button
        className="bg-blue-500 active:bg-blue-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-1 mb-1"
        type="button"
      >
        Send
      </button>

      {/* Real Posts */}

      <div class="flex w-full items-center font-sans md:p-6">
        <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/700" alt="Avatar of Author" />
        <div class="flex-1">
          <p class="text-base font-bold text-base md:text-xl leading-none">First Post</p>
          <p class="text-gray-600 text-xs md:text-base">I started learn React JS</p>
        </div>
        <div class="justify-end">
          <button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Posts;