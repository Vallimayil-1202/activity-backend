const express = require("express")
const Activity = require("./models/activity")
const router = express.Router()


router.get("/activity", async (req, res) => {
	const posts = await Activity.find()
	res.send(posts)
})

router.post("/activity", async (req, res) => {
	console.log(req.body)
	const activity = new Activity({
		title: req.body.title,
		notes: req.body.notes,
		category: req.body.category,
		progress: 0,
		createdAt: new Date(),
		updatedAt: new Date()
	})
	await activity.save()
	res.send(activity)
})

router.get("/activity/:id", async (req, res) => {
	try {
		const activity = await Activity.findOne({ _id: req.params.id })
		res.send(activity)
	} catch (error) {
		res.status(404)
		res.send({ error: "Activity doesn't exist!" })
	}
})

router.patch("/activity/:id", async (req, res) => {
	try {
		const activity = await Activity.findOne({ _id: req.params.id })

		if (req.body.title) {
			activity.title = req.body.title
		}

		if (req.body.notes) {
			activity.notes = req.body.notes
		}

		if (req.body.category) {
			activity.category = req.body.category
		}

		if (req.body.progress) {
			activity.progress = req.body.progress
		}

		activity.updatedAt = new Date()


		await activity.save()
		res.send(activity)
	} catch {
		res.status(404)
		res.send({ error: "Activity doesn't exist!" })
	}
})

router.delete("/activity/:id", async (req, res) => {
	try {
		const activity = await Activity.findOne({ _id: req.params.id })
		await Activity.deleteOne({ _id: req.params.id })
		console.log(activity)

		res.status(204)
		res.send(activity)
	} catch {
		res.status(404)
		res.send({ error: "Activity doesn't exist!" })
	}
})

module.exports = router