// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/githubSlice";
import { useEffect } from "react";

const App = () => {
  let dispatch = useDispatch();
  let {data: user, isLoading} = useSelector(state => {
    // console.log("state", state);
    return state.github
  });

  useEffect(() => {
    console.log("Calling fetchData inside app.js")
    dispatch(fetchData());

  }, [])

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="github-user">
      {user && (
        <>
          <h2>GitHub User: {user.login}</h2>
          <div>
            <p>Name: {user.name}</p>
            <p>Bio: {user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
