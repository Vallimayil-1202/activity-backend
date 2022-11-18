const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

mongoose
	.connect("mongodb+srv://user:pass@activity.7cfdpcb.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", routes)
		var port_number = app.listen(process.env.PORT || 3000, () => {
			console.log("Running")
		});

	})


