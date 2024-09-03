import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    //Do something
    res.send(201);
});

app.put("/user/abed", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/abed", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/abed", (req, res) => {
    // Delete user
    res.sendStatus(200);
});

app.listen(port, () => console.log(`App is listening on port ${port}`))