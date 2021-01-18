const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
console.log(body);
Workout.create(body, (err, data) => {
    if (err) {
        throw err;
    } else {
        res.json(data);
    }
});
});

router.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
        throw err;
    } else {
        return res.json(data);
    }
  });
});

router.get("/api/workouts/range", (req, res) => {
	Workout.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			return res.json(data);
		}
	})
		.limit(7)
		.sort({ day: -1 });
});
  
  module.exports = router;