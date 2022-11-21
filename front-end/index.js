const searchParam = window.location.search;
const [id, value] = searchParam.replace("?", "").split("=");
console.log(id, value);

fetch("http://localhost:3000/comments")
.then(responce => responce.json())
.then(data => console.log(data))
.catch(err => console.log(err))