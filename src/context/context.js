import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  user: "akram",
  posts: [],
};
export const Appcontext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userLoginOrLogout = (authUser) => {
    console.log(authUser);
    if (authUser) {
      dispatch({ type: "SET_USER", user: authUser });
    } else {
      dispatch({ type: "SET_USER", user: null });
    }
  };

  const addToPost = (post) => {
    console.log(post);
    dispatch({ type: "ADD_POST", payload: { post } });
  };
  //   console.log(state.posts);
  const hidePost = (id) => {
    console.log(id);
    dispatch({ type: "HIDE_POST", payload: { id } });
  };
  return (
    <Appcontext.Provider
      value={{ ...state, userLoginOrLogout, addToPost, hidePost }}
    >
      {" "}
      {children}{" "}
    </Appcontext.Provider>
  );
};
