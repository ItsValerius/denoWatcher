
const watcher = Deno.watchFs("./");

for await (const event of watcher) {
    console.log(">>>> event", event);
    console.log(event.paths);

    console.log(new Date());
}