import Surreal from "https://deno.land/x/surrealdb@v0.2.0/mod.ts";
import { parse } from "https://deno.land/x/xml/mod.ts";

const db = new Surreal('http://127.0.0.1:8000/rpc', "");

try {

    // Signin as a namespace, database, or root user
    await db.signin({
        user: 'root',
        pass: 'root',
    });

    // Select a specific namespace / database
    await db.use('test', 'test');



} catch (e) {

    console.error('ERROR', e);

}



const watcher = Deno.watchFs("./");

for await (const event of watcher) {
    console.log(">>>> event", event);
    console.log(event.paths);
    for (const path of event.paths) {
        if (event.kind === "access") {
            const xml = parse(await Deno.open(path));
            console.log(xml);
            db.create("alert", xml.alert)
        }
    }



    console.log(new Date());
}




