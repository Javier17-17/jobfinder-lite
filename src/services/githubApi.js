// src/services/githubApi.js

export const reposUrl = (username) =>
  `https://api.github.com/users/${username}/repos`;

export const repoUrl = (username, repoName) =>
  `https://api.github.com/repos/${username}/${repoName}`;
