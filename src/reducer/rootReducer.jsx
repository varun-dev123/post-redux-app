const initState = {
  posts: [
    { id: 1, title: "The Mad Locks", body: "lorem this is dummmmy text" },
    {
      id: 2,
      title: "The Kite Runners",
      body: "lorem this is dummmmy text"
    },
    {
      id: 3,
      title: "Flamingo the vasques",
      body: "lorem this is dummmmy text"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type == "DELETE_POST") {
    let newPosts = state.posts.filter(post => post.id !== action.id);

    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
