const express = require("express"),
  path = require("path"),
  proxy = require("http-proxy-middleware"),
  app = express();
var options = {
  target: "https://lb.jennie.dev.neighbourly.co.nz/api/rest",
  changeOrigin: true,
  headers: {
    Authorization: "Bearer Type=jwt,Credentials=TOKEN"
  },
  pathRewrite: {
    "^/api": ""
  }
};
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use("/api", proxy(options));
app.listen(3000);
