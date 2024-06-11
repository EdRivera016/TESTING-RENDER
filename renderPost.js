// Fetch posts from API endpoint
fetch('http://127.0.0.1:3000/api/posts')
  .then(response => response.json())
  .then(posts => {
    // Get the posts element
    const postsContainer = document.getElementById('posts');

    // Loop through each post and create HTML elements
    posts.data.forEach(post => {
      // Create elements for post data
      const postDiv = document.createElement('div');
      const username = document.createElement('h3');
      const thoughts = document.createElement('p');
      const createdAt = document.createElement('p');

      // Set inner HTML content
      username.textContent = `Username: ${post.username}`;
      thoughts.textContent = `Thoughts: ${post.thoughts}`;
      createdAt.textContent = `Created At: ${post.createdAt}`;

      // Append elements to postDiv
      postDiv.appendChild(username);
      postDiv.appendChild(thoughts);
      postDiv.appendChild(createdAt);

      // Append postDiv to postsContainer
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));
