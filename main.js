function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "User " + userId };
    callback(user);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 1000);
}

function fetchPostComments(postId, callback) {
  setTimeout(() => {
    const comments = ["Comment 1", "Comment 2"];
    callback(comments);
  }, 1000);
}

fetchUserData(1, (finishedUser) => {
  console.log("User:", finishedUser);
  fetchUserPosts(finishedUser.id, (posts) => {
    console.log("Posts:", posts);
    fetchPostComments(posts[0], (comments) => {
      console.log("Comments:", comments);
    });
  });
});

fetchUserData(1)
  .then((user) => {
    console.log("User:", user);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchPostComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  });

function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: userId, name: "User " + userId };
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      resolve(posts);
    }, 1000);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = ["Comment 1", "Comment 2"];
      resolve(comments);
    }, 1000);
  });
}

fetchUserData(1)
  .then((user) => {
    console.log("User:", user);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchPostComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  });
