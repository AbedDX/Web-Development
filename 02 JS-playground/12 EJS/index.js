import express from "express";

const app = express();
const port = 3000;


app.use(express.static('public'));
app.get("/", (req, res) => {
    const today = new Date();
    //Test code
    // weekend:
    // new Date("June 24, 2023 11:13:00");
    // weekday:
    // new Date("June 20, 2023 11:13:00");
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "it's time to work hard";
    // default image
    let image = "https://images-cdn.exchange.art/lNVbqiQ9aWNIb9SO5koupnbvNR4THCX4lI_eOl_ORGc?ext=fastly&optimize=medium";
 
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
        image = "https://images-cdn.exchange.art/NfvTCvtpxQKxRX1YnWk7Ogj-G1M3DECkP4GYd6QgCaM?ext=fastly&quality=90&format=pjpg&auto=webp"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
        image: image});
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});