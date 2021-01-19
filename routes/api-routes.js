const Workout = require("../models/workout.js");
const router = require("express").Router();

router.post("/api/workout", ({ body }, res) => {
console.log(body);
Workout.create(body, (err, data) => {
    if (err) {
        throw err;
    } else {
        res.json(data);
    }
});
});

router.get("/api/workout", (req, res) => {
  Workout.find({}, 
    (err, data) => {
    if (err) {
        throw err;
    } else {
        return res.json(data);
    }
  });
});

router.get("/api/workout/range", (req, res) => {
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
  
router.put("/api/workout/:id", ({ params, body }, res) => {
    console.log(body)
	db.Workout.findByIdAndUpdate(
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