

const GithubUser = (props) => {
  let {isLoading, user} = props;

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

export default GithubUser;
