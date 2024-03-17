// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express server
const app = express();
// 3. Create a port to listen to
const port = 3000;
// 4. Create a function to handle requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// 6. Create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// 7. Create a route to handle comments by id
app.get('/comments/:id', (req, res) => {
  res.send(`Comment by id: ${req.params.id}`);
});
// 8. Create a route to handle comments by user
app.get('/comments/user/:user', (req, res) => {
  res.send(`Comments by user: ${req.params.user}`);
});
// 9. Create a route to handle comments by user and id
app.get('/comments/user/:user/:id', (req, res) => {
  res.send(`Comment by user and id: ${req.params.user}, ${req.params.id}`);
});

// 10. Create a route to handle comments by user and id
app.get('/comments/user/:user/:id', (req, res) => {
  res.send(`Comment by user and id: ${req.params.user}, ${req.params.id}`);
});
// 11. Create a route to handle comments by user and id
app.get('/comments/user/:user/:id', (req, res) => {
  res.send(`Comment by user and id: ${req.params.user}, ${req.params.id}`);
});
// 12. Create a route to handle comments by user and id
app.get('/comments/user/:user/:id', (req, res) => {
  res.send(`Comment by user and id: ${req.params.user}, ${req.params.id}`);
});
// 13. Create a route to handle comments by user and id
app.get('/comments/user/:user/:id', (req, res) => {
  res.send(`Comment by user and id: ${req.params.user}, ${req.params.id}`);
});
// 14. Create a route to handle comments by user and id
app