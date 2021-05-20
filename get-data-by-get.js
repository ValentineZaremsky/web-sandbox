const ul = document.getElementById('authors');

const url = 'https://randomuser.me/api/?results=16';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = Array.from(data.results);

  return authors.map((author) => {
    let li = createNode('li');
    let a = createNode('a');
    let img = createNode('img');
    let span = createNode('span');

    a.href = `mailto:${author.email}`
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;

    append(a, img);
    append(a, span);
    append(li, a);
    append(ul, li);
  })
})
.catch((error) => {
  console.log(error);
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  if (parent) {
    return parent.append(el);
  }
}
