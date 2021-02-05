const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname, "client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
	});
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooklist", {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected!"))
	.catch((err) => console.log(err));

io.on("connection", (socket) => {
	console.log("a user connected");
});

// Start the API server
http.listen(PORT, function () {
	console.log(`Server now listening on PORT ${PORT}!`);
});
