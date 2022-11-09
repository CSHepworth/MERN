const express = require("express");
const app = express();
const port = 8000;
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({message: "Hello "});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const users = [
  { firstName: "Ellen", lastName: "Ripley" },
  { firstName: "Todd", lastName: "Nickerson"}
];

app.get("/api/users", (req, res) => {
  res.json( users );
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

app.post("/api/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json( { status: ok });
});