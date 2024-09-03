import express from "express";

const app = express();
const port = 3000;

console.log("Starting node server...");
app.listen(port, () => console.log(`App is listening on port ${port}`));

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: 123-456-7890</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Abed</p>");
});




