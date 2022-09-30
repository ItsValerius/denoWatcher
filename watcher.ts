
const watcher = Deno.watchFs("./");

for await (const event of watcher) {
    console.log(">>>> event", event);
    console.log(event.paths);
    const decoder = new TextDecoder("utf-8");
    for (const path of event.paths) {
        const file = await Deno.readFile(path)
        console.log(decoder.decode(file));
    }



    console.log(new Date());
}