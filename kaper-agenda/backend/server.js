
import express from "express";
import dotenv from "dotenv";

 dotenv.config();

const app = express();// express is de server module zelf

const PORT = process.env.PORT || 8081;

// connectDB(process.env.DATABASE_URL)

app.get("/",(req,res )=>{

res.send("Het werkt")
})


console.log("my port","process.env.PORT");
// functie die je feedback geeft welke port
app.listen(8081,() =>{

    console.log("server is up and running on PORT:", PORT);

});