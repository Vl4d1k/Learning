import * as userApi from "../api/api"

const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS_PAGE_DATA = 'SET-USERS-PAGE-DATA'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLOWING_PROGRESS = 'TOGGLE_IS_FOLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            console.log("follow user id:", action.user_id)

            return {
                ...state,
                users: [...state.users.map(element =>
                    element.id === action.user_id ? {...element, followed: true } : {...element })]
            };
        case UNFOLLOW:
            console.log("unfollow user id:", action.user_id)
            return {
                ...state,
                users: [...state.users.map(element =>
                    element.id === action.user_id ? {...element, followed: false } : {...element })]
            };
        case SET_USERS_PAGE_DATA:
            let curState = {...state, users: [...action.payload.items], totalCount: action.payload.totalCount }
            return curState;
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page_number };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLOWING_PROGRESS:
            return {...state, 
                followingInProgress: action.followingInProgress ?  [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId) };
        default:
            return state
    }
}

export const follow = (user_id) => { return { type: 'FOLLOW', user_id }}

export const unfollow = (user_id) => {return { type: 'UNFOLLOW', user_id }}

export const setUsersPageData = (payload) => { return { type: 'SET-USERS-PAGE-DATA', payload } }

export const setCurrentPage = (page_number) => { return { type: 'SET-CURRENT-PAGE', page_number } }

export const toggleIsFetching = (isFetching) => { return { type: 'TOGGLE-IS-FETCHING', isFetching } }

export const toggleFollowingProgress = (followingInProgress, userId) => { return { type: 'TOGGLE_IS_FOLOWING_PROGRESS', followingInProgress, userId } }

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
         dispatch(setUsersPageData(data))
        }
        )
    }
}

export const followThunkCreator = (userId) => {
    console.log("userId in ThunkCreator: ", userId)
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userApi.followRequest(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                else console.log("FOLLOW ERROR: ", data)
                dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    console.log("userId in ThunkCreator: ", userId)
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userApi.unfollowRequest(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                else console.log("UNFOLLOW ERROR: ", data)
                dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export default usersReducer;