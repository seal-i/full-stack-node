const express = require("express");
const app = express();
const router = express.Router();

// Serve frontend files
app.use(express.static("public"));

// API route
router.get("/songs", function (req, res) {
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
    };
    res.json(song);
});

app.use("/api", router);

app.get("/hello", function (req, res) {
    res.send("Hello from Express!");
});

app.get("/goodbye", function (req, res) {
    res.send("Goodbye from Express!");
});

app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
