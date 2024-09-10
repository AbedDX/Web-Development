import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  if (numberOfLetters) {
    res.render("index.ejs", { numberOfLetters });
  }else {
    res.render("index.ejs", { numberOfLetters: "Enter your name" });
  }
  
});

app.post("/submit", (req, res) => {

  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters });
  

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
