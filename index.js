const userContainer = document.querySelector(".users-container");
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const result = data.map(
    (user) => `
            <div class="users__box">
                <article>name: <span>${user.name}</span> </article> 
                <article>email: <span>${user.email}</span> </article> 
                <div class="button-container">
                    <a href="details.html?userId=${user.id}" class="button">Get User’s Posts</a>
                </div>
            </div> `
  );
  return (userContainer.innerHTML = result.join(""));
};
fetchUsers();
