
import express from 'express'
import dotenv from 'dotenv'
import { sql } from './config/filedb.js';



dotenv.config();

app.use(express.json());

const app = express();

const PORT = process.env.PORT || 8081;
async function initializeDB(){
  try{
    
    await sql`CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL, 
    transactions DECIMAL(10,2) NOT NULL, 
    created_AT DATE NOT NULL DEFAULT CURRENT_DATE
    )`;

console.log("initialiseren gelukt")
  } catch(error) {
    console.log("Error initialiseert ", error)
    process.exit(1);
  }
}

app.get("/", (req, res) => {
  res.send("Server werkt")
});


initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log("DE port is PORT:", PORT);
  });
});



// xxcdc

// app.post("/api/transactions", (req, res) => {
//     try {
            
//         const { user_id, title, category, transactions } = req.body;
//     } catch (error) {
            
//     }
// }
// );
  
  // import express from 'express'
  // const app = express()
  // app.listen(5001, () => {
  //   console.log("DE port is PORT:", 5001);
  // });

