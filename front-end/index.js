const searchParam = window.location.search;
const [_, id] = searchParam.replace("?", "").split("=");


fetch(`http://localhost:3000/comments/${id}`)
.then(responce => responce.json())
.then(comments => renderComments(comments))
.catch(err => console.log(err))


/**
 * Google
 * DOM API for Javascript
 * DOM events using JavaScript
 */
const renderComments = function (comments) {
    const container = document.getElementById("comments-section");

    comments.forEach(function(data) {
        const commentCard = document.createElement("div");
        commentCard.setAttribute("class", "card");
    
        const commentBody = document.createElement("div");
        commentBody.setAttribute("class", "card-body");
        
        commentBody.appendChild(document.createTextNode(`${data.name}: ${data.comment}`));
    
        commentCard.appendChild(commentBody);

        container.appendChild(commentCard);
    });
};

const nameInput = document.getElementById("name");
const commetnInput = document.getElementById("comment");
const saveButton = document.getElementById("save-button");

/**
 * Google
 * Headers for fetch requests
 */
saveButton.addEventListener("click", function() {
    const name = nameInput.value;
    const comment = commetnInput.value;
    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, name, comment})
    })
    .then(responce => responce.json())
    .then(comment => renderComments([comment]))
    .catch(err => console.log(err))
});
