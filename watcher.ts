
const watcher = Deno.watchFs("./");

for await (const event of watcher) {
    console.log(">>>> event", event);
    console.log(event.paths);
    const file = await Deno.open(event.paths[0])
    console.log(file);

    console.log(new Date());
}