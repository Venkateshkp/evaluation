// const data = { username: 'example' };

// fetch(' http://localhost:3000/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })

const title = document.getElementById("heading");
function getData(){

fetch('http://localhost:3000/name', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'db/json',
  },
  body: JSON.stringify(title),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}
getData();