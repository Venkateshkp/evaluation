// const data = { username: 'example' };

// fetch(' http://localhost:3000/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })

function getData(){
    const title = document.getElementById("heading").value;
    fetch('http://localhost:3000/name', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'db/json',
    },
    body: JSON.stringify(title),
})
.then(response => response.json())
.then(title => {
  console.log('Success:', title);
})
.catch((error) => {
  console.error('Error:', error);
});
}
getData();