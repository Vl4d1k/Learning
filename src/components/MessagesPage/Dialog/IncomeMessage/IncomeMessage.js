const IncomeMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-2 items-start">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-800">{props.text}</span></div>
        </div>
        <img src={props.photo} alt="My profile" className="w-12 h-12 rounded-full order-1" />
      </div>
    </div>
  )
}

export default IncomeMessage;