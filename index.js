const liteflow = require("@liteflow/service").service();
const bodyParser = require("body-parser");
const app = require("express")();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simple memory cache to hold routes
// TODO implement LRU
const cache = {};

liteflow
  .listenTask({
    addRoute: require("./tasks/addRoute")(cache)
  })
  .on("error", error => console.error(error));

liteflow
  .emitEvent("started", { success: true })
  .catch(error => console.error(error));

app.get("/:route", async (req, res) => {
  if (cache[req.params.route]) {
    return res.status(200).send(cache[req.params.route]);
  }
  return res.status(404).send("Route not found!");
});

app.listen(8080, () => console.log("HTTP Server Ready on port 8080"));
