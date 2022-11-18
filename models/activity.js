const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	notes: String,
	category: String,
	progress: Number,
	createdAt: Date,
	updatedAt: Date
})

module.exports = mongoose.model("Activity", schema)

// activity.progress = 0
// activity.createdAt = new Date(),
// 	activity.updatedAt = new Date()

// title: '',
// 	notes: '',
// 		category : ''