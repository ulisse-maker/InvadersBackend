import { Elysia } from "elysia";
import {swagger} from "@elysiajs/swagger";
import {cors} from "@elysiajs/cors";

const app = new Elysia()
.use(swagger())
.use(cors());


app.get("/", () => "Ciao PIPPO");
app.get("/scores", () => {
 return {
				name:"Uli",
				score:1
			};
});





app.listen(3000);




console.log( 
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
