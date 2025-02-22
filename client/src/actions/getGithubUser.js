const getGithubUser = (userHandle="rnmKeshav") => {
  let githubUrl = `https://api.github.com/users/${userHandle}`;
  console.log("Making network call to github");
  
  return fetch(githubUrl)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`Error: API call to ${githubUrl} did not respond with 200 ok`);
      }
    })
    .catch(err => {
      throw new Error(err);
    })
}

export default getGithubUser;
