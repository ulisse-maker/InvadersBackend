import { Elysia } from "elysia";
import {swagger} from "@elysiajs/swagger";
import {cors} from "@elysiajs/cors";
import {Database} from "bun:sqlite";


const app = new Elysia()
.use(swagger())
.use(cors());
const db = new Database("scoresDB.sqlite",{create: true});
const createScoresTable = db.query(`CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, score INTEGER);`);
createScoresTable.run();


// http://localhost:3000
app.get("/", () => "Ciao PIPPO");

// GET: http://localhost:3000/scores
app.get("/scores", () => {
  const scores = db.query("SELECT * FROM scores ORDER BY score DESC LIMIT 10").all();
  return scores
});


// POST: http://localhost:3000/scores
app.post("/scores", ({body: { name,score }}) => {
  const scores = db.run(`INSERT INTO scores (name,score) VALUES (?,?)`,[name,score]);
  
});






app.listen(3000);






console.log( 
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
