const url = 'https://randomuser.me/api/?results=20';
const ul = document.getElementById('authors');

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = Array.from(data.results);

  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');

    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;

    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  if (parent) {
    return parent.appendChild(el);
  }
}
