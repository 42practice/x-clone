import { serve } from "@hono/node-server";
import { Hono } from "hono";
import tweets from "./routes/tweets/index.js";
import users from "./routes/users/index.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/tweets", tweets);
app.route("/users", users);

// エラーハンドリングを追加
app.onError((err, c) => {
  console.error("Error:", err);
  return c.json({ error: "Internal Server Error" }, 500);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);