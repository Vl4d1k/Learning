const OutcomeMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-1 items-end">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{props.text}</span></div>
        </div>
        <img src={props.photo} alt="My profile" className="w-12 h-12 rounded-full order-2" />
      </div>
    </div>
  )
}

export default OutcomeMessage;