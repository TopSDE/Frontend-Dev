// fetch = returns promise object with fulfilled state (response object)
// 'https://jsonplaceholder.typicode.com/users' = Dummy API / JSONPlaceholder
    // JSONPlaceholder is a server, 
    // but it is a dummy/fake server used only for testing and learning API calls.

var x = fetch('https://jsonplaceholder.typicode.com/users')
console.log(x)

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });