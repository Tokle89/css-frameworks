import { createProfileInfo, createFeedBtnInfo } from "./createHtml/createProfile.js";
import { createPosts } from "./createHtml/createPosts.js";
import { createCommentForm, createComment, displayCommentMsg } from "./createHtml/createComments.js";
import { handleCommentSubmit } from "../comments/postComments.js";
import { createElement } from "./createHtml/createHtmlFunction.js";
import { createUserCard } from "./createHtml/createUsers.js";

const postContainer = document.getElementById("posts-container");

export const renderPosts = (posts) => {
  posts.forEach(createPosts);
};

export const renderCommentSection = (id, comments) => {
  const commentContainer = document.getElementById(id);

  const commentForm = createCommentForm(id);
  commentForm.addEventListener("submit", (event) => handleCommentSubmit(id));

  const userCommentsContainer = createElement("div", ["commentsContainer", "p-2", "bg-light"]);

  commentContainer.append(commentForm, userCommentsContainer);

  renderComments(comments);
};

const renderComments = (comments) => {
  if (comments.length > 0) {
    comments.forEach(renderComment);
  }

  displayCommentMsg();
};

const renderComment = (data) => {
  const container = document.querySelector(".commentsContainer");
  const comment = createComment(data);
  container.append(comment);
};

export const renderProfile = ({ name, email, avatar, _count }) => {
  createProfileInfo(name, email, avatar);
  createFeedBtnInfo(_count);
};

export const renderUsers = (users) => {
  users.forEach(renderUser);
};

const renderUser = ({ name, email, avatar, _count }) => {
  const userCard = createUserCard(name, email, avatar, _count);
  postContainer.classList.add("d-flex", "flex-wrap", "justify-content-center");

  postContainer.append(userCard);
};
