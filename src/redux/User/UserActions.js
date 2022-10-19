import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"
import axios from 'axios'

const fetchUserRequest = ()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUserFail = (error)=>{
    return{
        type:FETCH_USER_FAIL,
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            
            const users = response.data
            dispatch(fetchUserSuccess(users))

        }).catch(error=>{
            const errorMsg = error.message
            dispatch(fetchUserFail(errorMsg))
        })

    }
}