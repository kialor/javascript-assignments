//Add to HTML page

function addToDiv (data) {
    const createHtmlPost = document.createElement("div");
    const resultArea = document.querySelector(".resultArea");
    const text = document.createTextNode(JSON.stringify(data));
    resultArea.innerHTML = "";
    createHtmlPost.appendChild(text);
    resultArea.appendChild(createHtmlPost); 
    
}

//get all posts

const allButton = document.querySelector("#allPosts");

allButton.addEventListener("click", ()  => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    addToDiv(json);
}) 
});

//get post id of 10

const id10Button = document.querySelector("#id10");

id10Button.addEventListener("click", ()  => {
fetch('https://jsonplaceholder.typicode.com/posts/10')
.then(response => response.json())
.then(json => {
    addToDiv(json);
}) 
});

//create new post and log the id
const createPostButton = document.querySelector("#createPost");

createPostButton.addEventListener("click", () => {
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    userId: 1,
    title: 'this is some text to the new post',
    body: 'this is some text for the new body of the new post',
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => { console.log(json.id);
                    addToDiv(json);
  });
});

//Replace the post with id of 12 and render the responseJSON
const replaceIDButton = document.querySelector("#replacePost");

replaceIDButton.addEventListener("click", () => {
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'changed id to 12 in js code',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => addToDiv(json));
  });



//Update title of post with id of 12

const updateTitleButton = document.querySelector("#updateTitle");

updateTitleButton.addEventListener("click", () => {
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'CHANGED TITLE',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => addToDiv(json));
});

//Delete post with id of 12

const deleteButton = document.querySelector("#deletePost");

deleteButton.addEventListener("click", () => {
fetch('https://jsonplaceholder.typicode.com/posts/12', {
  method: 'DELETE',
})
.then((response) => response.json())
.then((json) => { console.log(json);
                  addToDiv("deleted");
});
});
