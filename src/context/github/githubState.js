import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import userApi from "../../utils";
import {
  SEARCH_USERS,
  GET_REPOS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,

} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // search users
  const searchUsers = async text => {
    setLoading();
    const {
      data: { items }
    } = await userApi.getSearch({ q: text });
    dispatch({
      type: SEARCH_USERS,
      payload: items
    });
  };
  //get user
  const getUser = async login => {
    setLoading();
    const { data } = await userApi.myUserinfo({ login });
    dispatch({
      type: GET_USER,
      payload: data
    });
  };
  //get repos
  const getUserRepos = async login => {
    setLoading();
    const { data } = await userApi.getUserRepos({ login });
    dispatch({
      type: GET_REPOS,
      payload: data
    });
  };
  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  //测试数据
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
