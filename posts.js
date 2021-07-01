const postContainer = document.querySelector(".post-container");
const header = document.querySelector(".header");
const backLink = document.querySelector(".back-link");
const fetchPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await response.json();
  const result = data.map(
    (post) => `
            <div class="post-box">
               <h2>${post.title}</h2>
               <p>${post.body}</p>
           </div> `
  );
  const a = document.createElement("a");
  a.setAttribute("href", "index.html");
  a.innerHTML = "Back Home";
  backLink.appendChild(a);

  return (postContainer.innerHTML = result.join(""));
};

const fetchUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  header.innerHTML = ` <h1>All ${data.name}'s Posts</h1>`;
};

const urlSearchParams = new URLSearchParams(window.location.search);
const userId = urlSearchParams.get("userId");

window.addEventListener("load", () => {
  fetchUser(userId);
  fetchPosts(userId);
});
