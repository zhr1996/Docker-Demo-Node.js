const app = require("express")();

app.get("/", (req, res) =>
  res.json({
    message:
      "The most common imposter syndrome among developers is they don't know Docker",
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
