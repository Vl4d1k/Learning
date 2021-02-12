const TYPE = 'TYPE'

let initialState = {
  
}

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {

    default:
      return state
  
  }

}

export const changePostNameActionCreator = (text) => {
  return { type: 'type', name: text }
}

export default usersReducer;