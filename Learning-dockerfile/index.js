import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World from dockerized node app!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
