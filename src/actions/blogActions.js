import axios from 'axios'
import {apiUrl} from '../config'
import {GET_ALL_POSTS} from "../actions/types";


export const createNewPost = (blogData,history) =>{
    return dispatch => {
        let createUrl = `${apiUrl.baseUrl}${apiUrl.createPost}`;
        axios.post(createUrl,blogData).then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })
    }
};

export const getAllPost = () =>{
    return dispatch => {
        let getPostUrl = `${apiUrl.baseUrl}${apiUrl.getAllPost}`;
        axios.get(getPostUrl).then(res=>{
            dispatch({
                type: GET_ALL_POSTS,
                payload: res.data
              })
        }).catch(err=>{
            console.log(err);
        })
    }
};