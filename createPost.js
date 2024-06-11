document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
  
    postForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const thoughts = document.getElementById('thoughts').value;
  
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, thoughts })
        });
  
        if (response.ok) {
          console.log('Post created successfully');
          // Optionally, you can redirect the user to the home page or update the UI to display the new post
        } else {
          console.error('Failed to create post');
          // Handle error, such as displaying an error message to the user
        }
      } catch (error) {
        console.error('Error creating post:', error);
        // Handle error, such as displaying an error message to the user
      }
    });
  });
  