const ul = document.getElementById('authors');

const url = 'https://randomuser.me/api';

let data = {
  name: 'Sara'
}

var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});

console.log('==>', request);

fetch(request)
.then((resp) => resp.json())
.then(function(data) {
  let authors = Array.from(data.results);


  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');

    img.src = author.picture.large;
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
    return parent.append(el);
  }
}
