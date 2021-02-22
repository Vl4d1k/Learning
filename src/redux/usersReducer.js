const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS_PAGE_DATA = 'SET-USERS-PAGE-DATA'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

let initialState = {
    users: [],
    pageSize: 4,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(element =>
                    element.id === action.user_id ?
                        { ...element, followed: true } :
                        { ...element })]
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(element =>
                    element.id === action.user_id ?
                        { ...element, followed: false } :
                        { ...element })]
            };
        case SET_USERS_PAGE_DATA:
            return { ...state, users: [...action.payload.items], totalCount: action.payload.totalCount };
        case SET_CURRENT_PAGE:  
            let curState = { ...state, currentPage: action.page_number }
            console.log("Current state: ", curState)
            return curState;
        default:
            return state
    }

}

export const followAC = (user_id) => { return { type: 'FOLLOW', user_id } }

export const unfollowAC = (user_id) => { return { type: 'UNFOLLOW', user_id } }

export const setUsersPageDataAC = (payload) => { return { type: 'SET-USERS-PAGE-DATA', payload } }

export const setCurrentPageAC = (page_number) => { return { type: 'SET-CURRENT-PAGE', page_number } }

export default usersReducer;