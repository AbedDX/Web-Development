import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


// Home route (blog index page)

app.get('/', (req, res) => {
  res.render('index.ejs', {
      blogPosts: [
          { title: 'My First Blog Post', image: 'https://picsum.photos/200/200', content: 'This is the first post.' },
          { title: 'Second Post', image: 'https://picsum.photos/200/200', content: 'This is another post.' }
      ]
  });
});

//Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
