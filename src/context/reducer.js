export const reducer = (state, action) => {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.payload.post],
    };
  }
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }

  if (action.type === "HIDE_POST") {
    const filteredPosts = state.posts.filter(
      (pos) => pos.id !== action.payload.id
    );
    console.log(filteredPosts);
    return {
      ...state,
      posts: filteredPosts,
    };
  }
  return {
    state,
  };
};
