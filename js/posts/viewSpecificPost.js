import { getUrlId } from "../functions/getUrlId.js";

export const viewPost = (postId) => {
  const id = getUrlId();
  if (Number(id) === postId) {
    return;
  }

  window.location.href = `/feed/index.html?id=${postId}`;
};

export const adjustingPageContent = () => {
  const createPostContainer = document.querySelector(".create-post_container");
  const searchContainer = document.getElementById("posts-search_container");
  createPostContainer.remove();
  searchContainer.remove();

  const main = document.querySelector("main");
  main.style.height = "100vh";
  main.style.paddingTop = "50px";
};