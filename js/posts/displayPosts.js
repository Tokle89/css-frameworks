import { renderPosts } from "../render/render.js";
import { filterPosts } from "../utils/filterFunctionality.js";
import { apiUrls } from "../api/constant.js";
import { createPosts } from "../render/createHtml/createPosts.js";
import { checkResult } from "../users/suggestUsers.js";
import { apiCall } from "../api/api.js";

export const displayPosts = async (url) => {
  try {
    const posts = await apiCall(url, "get");
    console.log(posts);
    checkResult(posts, renderPosts, `do not  follow anybody yet`);
    filterPosts(posts);
  } catch (error) {
    console.log(error);
    alert(`an error has occurred: ${error}`);
  }
};

export const displayPost = async () => {
  try {
    const post = await apiCall(apiUrls.post_parameter, "get");
    createPosts(post);
  } catch (error) {
    console.log(error);
    alert(`an error has occurred: ${error}`);
  }
};