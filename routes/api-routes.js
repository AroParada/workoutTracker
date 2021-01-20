const Workout = require("../models/workout.js");
const router = require("express").Router();

router.post("/api/workouts", ({ body }, res) => {
Workout.create(body, (err, data) => {
    if (err) {
        throw err;
    } else {
        res.json(data);
    }
});
});

router.get("/api/workouts", (req, res) => {
  Workout.find({}, 
    (err, data) => {
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
  
router.put("/api/workouts/:id", ({ params, body }, res) => {
	Workout.findOneAndUpdate(
        { _id: params.id },
        
		{ 
            $push: { exercises: body } 
        },
		(err, data) => {
			if (err) {
				throw err;
			} else {
				res.json(data);
			}
		}
	);
});
  module.exports = router;