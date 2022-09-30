
const watcher = Deno.watchFs("./");

for await (const event of watcher) {
    console.log(">>>> event", event);
    console.log(event.paths);
    const decoder = new TextDecoder("utf-8");
    const file = await Deno.readFile(event.paths[0])
    console.log(decoder.decode(file));


    console.log(new Date());
}